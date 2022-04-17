import { Helmet } from 'react-helmet'
import { Header, Footer } from './'

export const Page = ({ children, title = 'Welcome' }) => (
  <div className="flex flex-col bg-white dark:bg-black text-black dark:text-white min-h-screen">
    <Helmet titleTemplate="%s | Jason Nall">
      <title>{title}</title>
    </Helmet>
    <Header />
    <div className="flex flex-col">{children}</div>
  </div>
)
