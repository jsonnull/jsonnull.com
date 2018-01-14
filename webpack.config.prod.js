const webpack = require('webpack')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MinifyPlugin = require('babel-minify-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')

const pathsToClean = ['public/*']

const browser = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: '[name].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/\/node_modules\//],
        use: 'babel-loader?cacheDirectory'
      },
      {
        test: /\.md$/,
        use: [
          {
            loader: path.resolve('./src/webpack/loader.js')
          }
        ]
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.ttf$/,
        use: 'file-loader?name=static/[hash].[ext]'
      }
    ]
  },
  resolve: {
    modules: ['node_modules', 'src/client', 'static'],
    extensions: ['.js', '.json']
  },
  plugins: [
    new CleanWebpackPlugin(pathsToClean),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new MinifyPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new ManifestPlugin()
  ]
}

module.exports = browser
