const renderMarkdown = require('./render')

// A markdown loader which renders our content to a file object
module.exports = function(content) {
  // Set up the loader as an async operation
  const callback = this.async()

  const result = renderMarkdown(content)

  callback(null, result)
}
