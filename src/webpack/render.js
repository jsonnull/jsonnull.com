const gulp = require('gulp')
const through = require('through2')
const path = require('path')

const PUBLIC_PATH = path.resolve(__dirname, '../../public')
const CONTENT_GLOB = path.resolve(__dirname, '../../content/') + '/**/*.md'
const REACT_SERVER_RENDER = '../server/render'

// Multipass process to render all site content
function buildSite() {
  // First pass, collect site metadata
  const siteMeta = {}

  // Second pass, render content
  gulp
    .src(CONTENT_GLOB)
    .pipe(render(siteMeta))
    .pipe(gulp.dest(PUBLIC_PATH))
}

// Returns a stream object which will render a page with the given content
function render(siteMeta) {
  const reactServerRender = require(REACT_SERVER_RENDER)

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

// This webpack plugin builds the site when the compilation process finishes
class Renderer {
  apply(compiler) {
    compiler.plugin('done', () => {
      buildSite()
    })
  }
}

module.exports = Renderer
