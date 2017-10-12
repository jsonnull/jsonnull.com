module.exports = function createHtml(props) {
  const fonts = [
    'Lato:300,400,700',
    'Cardo:400,700',
    'Merriweather:400,400italic,700',
    'Source+Code+Pro:300,400,700'
  ].join('|')

  const { template, content, body, head, styles } = props

  const windowProps = { template, content, head }

  return `
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        ${head.title.toString()}

        <link href="http://fonts.googleapis.com/css?family=${fonts}" rel='stylesheet' type='text/css' />
        <link rel="icon" type="image/png" href={favicon} />

        <script>
          window.__PROPS = ${JSON.stringify(windowProps)}
        </script>
        <script src="/bundle.js" async></script>
        <style type="text/css">
html, body {
  margin: 0; padding: 0;
}

html {
  font-size: 62.5%;
  font-family:
  /* 1 */ -apple-system, BlinkMacSystemFont,
  /* 2 */ "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
  /* 3 */ "Helvetica Neue", sans-serif;
}

body {
  font-size: 1.6rem; 
  line-height: 2.4rem;
  background-color: #fdfffb;
}

* {
  box-sizing: border-box;
}

h1, h2, h3, h4, h5, h6 {
  margin: 0;
}

ul, li {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

a, a:link, a:hover, a:visited {
  color: #3A7ADE;
  text-decoration: none;
}

::-moz-selection {
  color: #fdfffb;
  background: rgba(131, 135, 132, 0.99);
  opacity: 1;
}

::selection {
  color: #fdfffb;
  background: rgba(131, 135, 132, 0.99);
  opacity: 1;
}
        </style>
        ${styles}
      </head>
      <body>
        <div id="react-root">${body}</div>
      </body>
    </html>
  `
}
