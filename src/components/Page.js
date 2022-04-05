import { Helmet } from 'react-helmet'
import { Header, Footer } from './'

export const Page = ({ children, title = 'Welcome' }) => (
  <div className="flex flex-col bg-white text-zinc-900 min-h-screen">
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
