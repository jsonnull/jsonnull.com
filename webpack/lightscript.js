function lightscriptBlock (outputFilePattern) {
  const lightscript = (context) => ({
    module: {
      loaders: [{
        test: context.fileType('text/x-lightscript'),
        exclude: [ /\/node_modules\// ],
        loaders: [ 'babel-loader?cacheDirectory' ]
      }]
    }
  })

  return Object.assign(lightscript, {
    pre: preHook
  })
}

function preHook (context) {
  const registeredTypes = context.fileType.all()
  if (!('text/x-lightscript' in registeredTypes)) {
    context.fileType.add('text/x-lightscript', /\.lsc$/)
  }
}

module.exports = lightscriptBlock
