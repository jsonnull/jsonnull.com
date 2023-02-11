import * as React from 'react';
import '../global.css'
import BaseApp from 'next/app'

class App extends BaseApp {
  render() {
    const { Component, pageProps } = this.props

    const getLayout = Component.getLayout || ((page: React.ReactNode) => page)

    return getLayout(<Component {...pageProps} />, pageProps)
  }
}

export default App
