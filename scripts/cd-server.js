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
    console.log('Received POST request on /webhook')

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
        const data = JSON.parse(payload)

        const passed = data.result == 0
        const master = data.branch == 'master'

        console.log(
          'Parsed payload of webhook, result is ' +
            data.result +
            ' on branch ' +
            data.branch
        )

        if (passed && master) {
          console.log('Build passed, exiting process...')
          process.kill(process.pid, 'SIGKILL')
        }
      })
  }

  res.statusCode = 404
  res.end()
}).listen(port)
