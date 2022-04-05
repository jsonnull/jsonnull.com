import '../global.css'
import BaseApp from 'next/app'

class App extends BaseApp {
  render() {
    const { Component, pageProps } = this.props

    const getLayout = Component.getLayout || ((page) => page)

    return getLayout(<Component {...pageProps} />)
  }
}

export default App
