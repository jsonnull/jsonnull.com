const path = require('path')

module.exports = function(content) {
  const render = require('../public/render.js').default
  return render(content.toString())
}
