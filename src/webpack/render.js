const gulp = require('gulp')
const through = require('through2')
const path = require('path')

const contentPath = path.resolve(__dirname, '../../content/')
const publicPath = path.resolve(__dirname, '../../public')

function Renderer() {}

Renderer.prototype.apply = function(compiler) {
  //now you have access to all the compiler instance methods
  compiler.plugin('done', function() {
    gulp
      .src(contentPath + '/**/*.md')
      .pipe(render())
      .pipe(gulp.dest(publicPath))
  })
}

function render(content) {
  const renderPage = require('../server')

  return through.obj(function(file, encoding, callback) {
    // chang path extension to html
    file.path = file.path.replace('.md', '.html')

    // operate on contents
    const content = file.contents.toString()
    const buf = Buffer.from(renderPage(content))
    file.contents = buf

    callback(null, file)
  })
}

module.exports = Renderer
