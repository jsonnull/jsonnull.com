import { Helmet } from 'react-helmet'
import { Header } from './'
import { Spacer } from './Spacer.tsx'

export const Page = ({ children, title = 'Welcome', ogImage }) => {
  console.log(ogImage)
  return (
    <div className="flex flex-col bg-white dark:bg-black text-black dark:text-zinc-200 min-h-screen">
      <Helmet titleTemplate="%s | Jason Nall">
        <title>{title}</title>
        {ogImage && <meta property="og:image" content={ogImage} />}
        {ogImage && <meta name="twitter:image" content={ogImage} />}
      </Helmet>
      <Header />
      <div className="flex flex-col">{children}</div>
      <Spacer extraWide />
    </div>
  )
}
