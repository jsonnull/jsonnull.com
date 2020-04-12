import React from 'react'
import { Helmet } from 'react-helmet'
import Header from './Header'
import Footer from './Footer'

const background =
  'radial-gradient(100% 70vh at 0% 0%, #313135 0%, #17171A 100%)'
// 'radial-gradient(100% 70vh at 0% 0%, #3B4056 0%, #17171A 100%)'

const Page = ({ children, title = 'Welcome' }) => (
  <div className="bg-cloud-900 text-cloud-100" style={{ background }}>
    <Helmet titleTemplate="%s | Jason Nall">
      <title>{title}</title>
    </Helmet>
    <Header />
    <div className="flex flex-col">{children}</div>
    <Footer />
  </div>
)

export default Page
