const staticBlock = () => (context) => ({
  module: {
    loaders: [
      { test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$/, loader: "file" }
    ]
  } 
})

module.exports = staticBlock
