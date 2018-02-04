const webpack = require('webpack')
const path = require('path')
const ManifestPlugin = require('webpack-manifest-plugin')

const browser = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'public/'),
    publicPath: '/',
    filename: '[name].js'
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
    modules: ['node_modules'],
    extensions: ['.js', '.json']
  },
  devServer: {
    contentBase: path.resolve(__dirname, './public'),
    historyApiFallback: true,
    hot: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new ManifestPlugin()
  ]
}

module.exports = browser
