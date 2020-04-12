import React from 'react'
import { Helmet } from 'react-helmet'
import { Header, Footer } from './'

const background =
  'radial-gradient(100% 70vh at 0% 0%, #313135 0%, #17171A 100%)'
// 'radial-gradient(100% 70vh at 0% 0%, #3B4056 0%, #17171A 100%)'

export const Page = ({ children, title = 'Welcome' }) => (
  <div
    className="flex flex-col bg-cloud-900 text-cloud-100 min-h-screen"
    style={{ background }}
  >
    <Helmet titleTemplate="%s | Jason Nall">
      <title>{title}</title>
    </Helmet>
    <Header />
    <div className="flex flex-col">{children}</div>
    <Footer />
  </div>
)
