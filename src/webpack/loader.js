const renderMarkdown = require('../renderer')

// A markdown loader which renders our content to a file object
module.exports = function(content) {
  // Set up the loader as an async operation
  const callback = this.async()

  const rendered = renderMarkdown(content)

  const result = 'module.exports = ' + JSON.stringify(rendered)

  callback(null, result)
}
