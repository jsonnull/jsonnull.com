const puppeteer = require('puppeteer')
const path = require('path')

const URL =
  process.env.TRAVIS == true
    ? 'http://localhost:8080/twitter.html'
    : 'https://jsonnull.com/twitter.html'

const main = async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })
  const page = await browser.newPage()
  await page.setViewport({ width: 1500, height: 500 })
  try {
    await page.goto(URL, {
      waitUntil: 'networkidle'
    })
    await page.screenshot({ path: 'public/twitterHeader.png' })
  } catch (e) {
    console.error(e)
  }

  await browser.close()
}

main()
