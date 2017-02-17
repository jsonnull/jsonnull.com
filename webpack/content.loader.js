const path = require('path')
const glob = require('glob')

module.exports = function(content) {
  const dir = path.resolve(__dirname, '../content')
  const markdown = dir + '/**/*.md'

  let files = glob.sync(markdown)
    .map(filename => `require("./${path.relative(dir, filename)}")`)
    .join('\n')

  return files
}
