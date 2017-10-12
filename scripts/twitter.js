const puppeteer = require('puppeteer')
const path = require('path')

const filepath = path.resolve(__dirname, '../public/twitter.html')
;(async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setViewport({ width: 1500, height: 421 })
  await page.goto('file://' + filepath, { waitUntil: 'networkidle' })
  await page.screenshot({ path: 'public/twitterHeader.png' })

  await browser.close()
})()
