import Head from 'next/head'
import { Header } from './'
import { Spacer } from './Spacer.tsx'

export const Page = ({ children, title = 'Welcome', ogImage }) => {
  const ogImageURL = new URL(
    ogImage,
    process.env.NEXT_PUBLIC_NETLIFY_URL ?? process.env.NEXT_PUBLIC_SITE_URL
  )
  return (
    <div className="flex flex-col bg-white dark:bg-black text-black dark:text-zinc-200 min-h-screen">
      <Head>
        <title>{title} | Jason Nall</title>
        {ogImage && <meta property="og:image" content={ogImageURL} />}
        {ogImage && <meta name="twitter:image" content={ogImageURL} />}
      </Head>
      <Header />
      <div className="flex flex-col">{children}</div>
      <Spacer extraWide />
    </div>
  )
}
