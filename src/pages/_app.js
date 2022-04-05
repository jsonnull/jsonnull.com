import '../global.css'
import BaseApp from 'next/app'

class App extends BaseApp {
  render() {
    const { Component, pageProps } = this.props
    return <Component {...pageProps} />
  }
}

export default App
