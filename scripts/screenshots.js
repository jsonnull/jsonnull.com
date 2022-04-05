const puppeteer = require('puppeteer')
const path = require('path')

const HOST =
  process.env.TRAVIS == true
    ? 'http://localhost:3000/'
    : 'https://jsonnull.com/'

const readme = {
  url: '',
  size: {
    width: 1280,
    height: 768
  },
  options: {
    path: 'public/readme.jpeg',
    quality: 70
  }
}

const main = async () => {
  const browser = await puppeteer.launch({
    // https://github.com/puppeteer/puppeteer/issues/1837
    args: [
      '--disable-gpu',
      '--renderer',
      '--no-sandbox',
      '--no-service-autorun',
      '--no-experiments',
      '--no-default-browser-check',
      '--disable-dev-shm-usage',
      '--disable-setuid-sandbox',
      '--no-first-run',
      '--no-zygote',
      '--single-process',
      '--disable-extensions'
    ]
  })

  const page = await browser.newPage()

  await page.setViewport(readme.size)
  await page.goto(HOST + readme.url, { waitUntil: 'networkidle0' })
  await page.screenshot(readme.options)

  await browser.close()
}

main()
