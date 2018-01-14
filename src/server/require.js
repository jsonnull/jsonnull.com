const Module = require('module')
const fs = require('fs')
const path = require('path')
const originalRequire = Module.prototype.require

// Text intended to intercept
const HOME_TEXT = '!raw-loader!./home/Hero.js'
// Actual file which will be resolved
const pathname = path.join(__dirname, '../client/components/home/Hero.js')

Module.prototype.require = function(filename) {
  if (filename == HOME_TEXT) {
    return fs.readFileSync(pathname).toString()
  }

  return originalRequire.apply(this, arguments)
}
