import '../global.css'
import BaseApp from 'next/app'

class App extends BaseApp {
  render() {
    const { Component, pageProps } = this.props
    return Component.getLayout(<Component {...pageProps} />);
  }
}

export default App
