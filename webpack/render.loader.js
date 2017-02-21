require('css-modules-require-hook/preset')
require('babel-register')

const render = require('../src/render.js').default

module.exports = function(content) {
  return render(content.toString())
}
