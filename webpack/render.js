const path = require('path')

function renderBlock (outputFilePattern) {
  const render = (context) => ({
    module: {
      loaders: [{
        test: context.fileType('text/x-markdown'),
        use: [
          `file-loader?context=${
            path.resolve(__dirname, '../content/')
          }/&name=[path][name].html`,
          'render-loader',
          'extract-loader?publicPath=./',
          'raw-loader'
        ]
      }]
    },
    resolveLoader: {
      alias: {
        'render-loader': path.resolve(__dirname, 'render.loader.js'),
      }
    } 
  })

  return Object.assign(render, {
    pre: preHook
  })
}

function preHook (context) {
  const registeredTypes = context.fileType.all()
  if (!('text/x-markdown' in registeredTypes)) {
    context.fileType.add('text/x-markdown', /\.md$/)
  }
}

module.exports = renderBlock
