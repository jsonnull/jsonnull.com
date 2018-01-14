const Module = require('module')
const fs = require('fs')
const path = require('path')
const renderMarkdown = require('../renderer')
const appRoot = require('app-root-path')
const originalRequire = Module.prototype.require

// Text intended to intercept
const HOME_TEXT = '!raw-loader!./home/Hero.js'
// Actual file which will be resolved
const pathname = path.join(__dirname, '../client/components/home/Hero.js')

Module.prototype.require = function(filename) {
  if (filename == HOME_TEXT) {
    return fs.readFileSync(pathname).toString()
  }

  // Polyfill our custom webpack loader
  if (filename.slice(-3) == '.md') {
    // Chop the initial relative path from the import
    const relativeFilename = filename
      .split('content')
      .slice(1)
      .join('')

    // Relative position of content file
    const relativePath = path.join(appRoot.path, './content/', relativeFilename)

    let raw = fs.readFileSync(relativePath).toString()
    const rendered = renderMarkdown(raw)

    return rendered
  }

  return originalRequire.apply(this, arguments)
}
