const fs = require('fs')
const serialize = require('serialize-javascript')

const inlineStyles = fs.readFileSync(__dirname + '/style.css').toString()

module.exports = function createHtml(props) {
  const fonts = [
    'Lato:300,400,700',
    'Cardo:400,700',
    'Merriweather:300,300italic,700',
    'Source+Code+Pro:300,400,700'
  ].join('|')

  const { body, head, styles, asyncState, siteMeta, scriptName } = props

  return `
    <html ${head.htmlAttributes.toString()}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        ${head.title.toString()}
        ${head.meta.toString()}
        ${head.link.toString()}

        <link href="//fonts.googleapis.com/css?family=${fonts}" rel='stylesheet' type='text/css' />
        <link rel="icon" type="image/png" href={favicon} />

        <script type="text/javascript">
          window.ASYNC_COMPONENTS_STATE = ${serialize(asyncState)}
          window.SITE_META = ${JSON.stringify(siteMeta)}
        </script>
        <script src="/${scriptName}" async></script>
        <style type="text/css">
          @import url('//fonts.googleapis.com/css?family=${fonts}');
          ${inlineStyles}
        </style>
        ${styles}

        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-112190148-1"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'UA-112190148-1');
        </script>
      </head>
      <body>
        <div id="react-root">${body}</div>
      </body>
    </html>
  `
}
