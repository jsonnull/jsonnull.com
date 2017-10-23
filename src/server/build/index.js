const gulp = require('gulp')
const path = require('path')
const through = require('through2')
const appRoot = require('app-root-path')
const collectSiteMeta = require('./meta')

const PUBLIC_PATH = appRoot + '/public'
const CONTENT_GLOB = appRoot + '/content/**/*.md'

// Multipass process to render all site content
async function buildSite() {
  // First pass, collect site metadata
  const siteMeta = await collectSiteMeta(CONTENT_GLOB)

  // Second pass, render content
  gulp
    .src(CONTENT_GLOB)
    .pipe(render(siteMeta))
    .pipe(gulp.dest(PUBLIC_PATH))
}

// Returns a stream object which will render a page with the given content
function render(siteMeta) {
  const reactServerRender = require('./render')

  return through.obj((file, encoding, callback) => {
    // Change path extension to html
    file.path = file.path.replace('.md', '.html')

    // Replace the contents with the rendered version
    const content = file.contents.toString()
    const buf = Buffer.from(reactServerRender(content, siteMeta))
    file.contents = buf

    callback(null, file)
  })
}

module.exports = buildSite
