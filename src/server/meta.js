const { promisify } = require('util')
const glob = promisify(require('glob'))
const readFile = promisify(require('fs').readFile)
// const renderMarkdown = require('./render/markdown')

async function collectSiteMeta(contentGlob) {
  const siteMeta = {}

  // Get a list of files
  const files = await glob(contentGlob)
  const filesWithPreviews = await Promise.all(
    files.map(async filename => {
      const rawContent = await readFile(filename)
      const { content, data } = renderMarkdown(rawContent)

      const pathname =
        '/' +
        filename.substr(filename.indexOf('content') + 8).replace('.md', '.html')

      const snippet = content.substr(0, content.indexOf('\n'))

      return {
        pathname,
        snippet,
        data
      }
    })
  )

  Object.assign(siteMeta, { files: filesWithPreviews })

  return siteMeta
}

module.exports = collectSiteMeta
