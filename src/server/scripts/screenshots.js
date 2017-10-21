const puppeteer = require('puppeteer')
const path = require('path')

const HOST =
  process.env.TRAVIS == true
    ? 'http://localhost:8080/'
    : 'https://jsonnull.com/'

const readme = {
  url: '',
  size: {
    width: 1920,
    height: 1080
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

const screenshots = [twitter]

const main = async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })

  const page = await browser.newPage()

  for (let i = 0; i < screenshots.length; i++) {
    let screenshot = screenshots[i]
    if (screenshot.size) {
      await page.setViewport(screenshot.size)
    }
    try {
      await page.goto(HOST + screenshot.url, {
        waitUntil: 'networkidle'
      })
      await page.screenshot(screenshot.options)
    } catch (e) {
      console.error(e)
    }
  }

  await browser.close()
}

main()
