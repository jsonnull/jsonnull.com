// Continuous delivery server
const { spawn } = require('child_process')
const { resolve } = require('path')
const { createServer } = require('http')
const { urlencoded } = require('body-parser')

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
        const data = urlencoded(body)
        console.log(data)
      })
  }

  res.statusCode = 404
  res.end()
}).listen(port)
