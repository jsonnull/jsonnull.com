import getConfig from 'next/config'
import chromium from 'chrome-aws-lambda'
import fs from 'fs'
import path from 'path'
import { renderToStaticMarkup } from 'react-dom/server'
import { OpenGraph } from '../../components/OpenGraph'

export async function generateOpenGraphImage({ title, slug }) {
  const browser = await chromium.puppeteer.launch({
    args: chromium.args,
    executablePath: await chromium.executablePath,
    headless: true, // chromium.headless
  })

  const page = await browser.newPage()

  let html = fs
    .readFileSync(path.resolve(__dirname, './template.html'))
    .toString()

  const css = fs.readFileSync(
    path.resolve(__dirname, '../../../.css/bundle.css')
  )

  html = html.replace('{tailwindcss}', css)

  await page.setContent(html, {
    waitUntil: ['domcontentloaded', 'networkidle0'],
  })

  await page.setViewport({
    width: 1200,
    height: 632,
  })

  const string = renderToStaticMarkup(<OpenGraph title={title} />)

  await page.evaluate(($string) => {
    const reactRoot = document.querySelector('#react')
    reactRoot.innerHTML = $string
  }, string)

  await page.waitForTimeout(500)

  await page.screenshot({
    path: path.resolve(__dirname, `../../../public/og-images/${slug}.jpg`),
    type: 'jpeg',
    quality: 100,
    clip: { x: 0, y: 0, width: 1200, height: 632 },
  })

  await browser.close()

  return `/og-images/${slug}.jpg`
}
