import gulp from 'gulp'
import path from 'path'
import through from 'through2'
import appRoot from 'app-root-path'
import './require'
import collectSiteMeta from './meta'
import reactServerRender from './render'

const PUBLIC_PATH = appRoot + '/public'
const CONTENT_GLOB = appRoot + '/content/**/*.md'

process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at:', p, 'reason:', reason)
  // application specific logging, throwing an error, or other logic here
})

// Multipass process to render all site content
async function main() {
  // First pass, collect site metadata
  // const siteMeta = await collectSiteMeta(CONTENT_GLOB)

  // Second pass, render content
  gulp
    .src(CONTENT_GLOB)
    .pipe(render())
    .pipe(gulp.dest(PUBLIC_PATH))
}

// Returns a stream object which will render a page with the given content
function render() {
  return through.obj(async (file, encoding, callback) => {
    // Change path extension to html
    file.path = file.path.replace('.md', '.html')

    // Create location from path
    const { path } = file
    const location = path
      .substr(path.indexOf('content') + 7)
      .replace('index.html', '')
      .replace('.html', '')
    // console.log(location)

    // Replace the contents with the rendered version
    const content = file.contents.toString()
    const buf = Buffer.from(await reactServerRender(location))
    file.contents = buf

    callback(null, file)
  })
}

main()
