import BaseDocument, { Html, Head, Main, NextScript } from 'next/document'

class Document extends BaseDocument {
  render() {
    return (
      <Html>
        <Head>
          <link
            href={`//fonts.googleapis.com/css?family=Lato:100,400,800`}
            rel="stylesheet"
            type="text/css"
          />
        </Head>
        <body className="bg-cloud-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
