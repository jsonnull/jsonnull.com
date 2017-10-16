// Continuous delivery server
const { spawn } = require('child_process')
const { resolve } = require('path')
const { createServer } = require('http')
const { parse } = require('qs')

const hostname = '127.0.0.1'
const port = 80
const server = createServer((req, res) => {
  const { headers, method, url } = req

  // When a successful build has happened, kill the process, triggering a restart
  if (req.method === 'POST' && req.url === '/webhook') {
    // Send response
    res.statusCode = 200
    res.end()

    let body = []
    req
      .on('error', err => {
        console.error(err)
      })
      .on('data', chunk => {
        body.push(chunk)
      })
      .on('end', () => {
        body = Buffer.concat(body).toString()
        const { payload } = parse(body)

        console.log(payload.result + ' ' + payload.branch)

        const passed = payload.result == 0
        const master = payload.branch == 'master'

        if (passed && master) {
          process.exit(0)
        }
      })
  }

  res.statusCode = 404
  res.end()
}).listen(port)
