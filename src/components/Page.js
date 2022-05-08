import Head from 'next/head'
import { Header } from './'
import { Spacer } from './Spacer.tsx'

export const Page = ({ children, title = 'Welcome', ogImage }) => {
  let ogImageURL
  if (ogImage) {
    let baseUrl =
      process.env.NEXT_PUBLIC_NETLIFY_URL &&
      process.env.NEXT_PUBLIC_NETLIFY_URL !== ''
        ? process.env.NEXT_PUBLIC_NETLIFY_URL
        : process.env.NEXT_PUBLIC_SITE_URL
    ogImageURL = new URL(ogImage, baseUrl)
  }
  return (
    <div className="flex flex-col bg-white dark:bg-black text-black dark:text-zinc-200 min-h-screen">
      <Head>
        <title>{title} | Jason Nall</title>
        {ogImageURL && <meta property="og:image" content={ogImageURL} />}
        {ogImageURL && <meta name="twitter:image" content={ogImageURL} />}
      </Head>
      <Header />
      <div className="flex flex-col">{children}</div>
      <Spacer extraWide />
    </div>
  )
}
