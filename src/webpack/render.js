const serverBuild = require('../server/build')

// This webpack plugin builds the site when the compilation process finishes
class Renderer {
  apply(compiler) {
    compiler.plugin('done', () => {
      serverBuild()
    })
  }
}

module.exports = Renderer
