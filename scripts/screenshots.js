const puppeteer = require('puppeteer')
const path = require('path')

const HOST =
  process.env.TRAVIS == true
    ? 'http://localhost:8080/'
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

const twitter = {
  url: 'twitter.html',
  size: {
    width: 1500,
    height: 500
  },
  options: {
    path: 'public/twitterHeader.png'
  }
}

const screenshots = [readme, twitter]

const main = async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })

  const page = await browser.newPage()

  /*
   * Block google analytics on automated views
   */
  await page.setRequestInterception(true)
  page.on('request', request => {
    if (request.url().endsWith('analytics.js')) {
      request.abort()
    } else {
      request.continue()
    }
  })

  for (let i = 0; i < screenshots.length; i++) {
    let screenshot = screenshots[i]
    if (screenshot.size) {
      await page.setViewport(screenshot.size)
    }
    try {
      await page.goto(HOST + screenshot.url, {
        waitUntil: 'networkidle0'
      })
      await page.screenshot(screenshot.options)
    } catch (e) {
      console.error(e)
    }
  }

  await browser.close()
}

main()
