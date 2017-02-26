import React from 'react'

class Head extends React.Component {
  render () {
    const title = 'jsonnull ☕️💻🎨✏️🎵'

    const fonts = [
      'Lato:300,400,700',
      'Cardo:400,700',
      'Merriweather:400,400italic,700',
      'Source+Code+Pro:300,400'
    ].join('|')

    return (
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{ title }</title>

        <link href={`http://fonts.googleapis.com/css?family=${fonts}`} rel='stylesheet' type='text/css' />
        <link rel="icon" type="image/png" href="/favicon.png" />

        <link href='/style.css' rel='stylesheet' type='text/css' />
      </head>
    )
  }
}

export default Head
