const fs = require('fs')
const path = require('path')

/*
 * Write to the live caddyfile to update resource addresses which it should push
 */

// Get manifest.json
const manifest = require('../public/manifest.json')

const filename = path.resolve(__dirname, '../Caddyfile')

fs.readFile(filename, (err, data) => {
  if (err) {
    return console.log(err)
  }

  const raw = data.toString()
  const result = raw
    .replace(/main.js/g, manifest['main.js'])
    .replace(/home.js/g, manifest['home.js'])

  fs.writeFile(filename, result, 'utf8', err => {
    if (err) return console.log(err)
  })
})
