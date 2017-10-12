const puppeteer = require('puppeteer')
const path = require('path')

const main = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.setViewport({ width: 1500, height: 500 })
  await page.goto('http://localhost:8080/twitter.html', {
    waitUntil: 'networkidle'
  })
  await page.screenshot({ path: 'public/twitterHeader.png' })

  await browser.close()
}

main()
