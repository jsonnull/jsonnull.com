const webpack = require('webpack')
const DirectoryNamed = require("directory-named-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const Render = require('./render')

const browser = {
  entry: './src/index.lsc',
  output: {
    path: './public',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.lsc$/,
        exclude: [ /\/node_modules\// ],
        use: 'babel-loader?cacheDirectory'
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader?modules&importLoaders=1',
            'postcss-loader'
          ]
        })
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$/,
        use: 'file-loader?name=static/[hash].[ext]'
      }
    ]
  },
  resolve: {
    modules: ['node_modules', 'src', 'static'],
    extensions: ['.js', '.json', '.lsc'],
    plugins: [
      new DirectoryNamed(true)
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
    new ExtractTextPlugin('style.css'),
    new Render()
  ]
}

const server = Object.assign({}, browser, {
  entry: './src/render.lsc',
  output: {
    path: './public',
    library: 'render',
    libraryTarget: 'umd',
    filename: 'render.js'
  },
  target: 'node',
  externals: {
    fs: 'fs'
  }
})

module.exports = [browser, server]
