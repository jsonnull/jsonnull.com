import { Helmet } from 'react-helmet'
import { Header, Footer } from './'

export const Page = ({ children, title = 'Welcome' }) => (
  <div className="flex flex-col bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 min-h-screen">
    <Helmet titleTemplate="%s | Jason Nall">
      <title>{title}</title>
    </Helmet>
    <Header />
    <div className="flex flex-col">{children}</div>
    {/*
    <Footer />
    */}
  </div>
)
