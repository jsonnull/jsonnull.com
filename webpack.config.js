const webpack = require('webpack')
const path = require('path')
const DirectoryNamed = require('directory-named-webpack-plugin')
const Render = require('./render')

const browser = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/\/node_modules\//],
        use: 'babel-loader?cacheDirectory'
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$/,
        use: 'file-loader?name=static/[hash].[ext]'
      }
    ]
  },
  resolve: {
    modules: ['node_modules', 'src', 'static'],
    extensions: ['.js', '.json'],
    plugins: [new DirectoryNamed(true)]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"'
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new Render()
  ]
}

module.exports = browser
