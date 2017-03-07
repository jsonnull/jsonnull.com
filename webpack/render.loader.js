const path = require('path')

module.exports = function(content) {
  const render = require('../public/bundle.js').default
  return render(content.toString())
}
