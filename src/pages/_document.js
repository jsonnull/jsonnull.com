import BaseDocument, { Html, Head, Main, NextScript } from 'next/document'

class Document extends BaseDocument {
  render() {
    return (
      <Html>
        <Head></Head>
        <body className="bg-black">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
