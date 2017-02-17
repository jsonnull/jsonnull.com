const path = require('path')

function contentBlock (outputFilePattern) {
  const markdown = (context) => ({
    module: {
      loaders: [{
        test: context.fileType('text/x-jsonnull'),
        use: 'content-loader'
      }]
    },
    resolveLoader: {
      alias: {
        'content-loader': path.resolve(__dirname, 'content.loader.js')
      }
    } 
  })

  return Object.assign(markdown, {
    pre: preHook
  })
}

function preHook (context) {
  const registeredTypes = context.fileType.all()
  if (!('text/x-jsonnull' in registeredTypes)) {
    context.fileType.add('text/x-jsonnull', /\.jsonnull/)
  }
}

module.exports = contentBlock
