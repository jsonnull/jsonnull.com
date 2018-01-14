const webpack = require('webpack')
const path = require('path')

const browser = {
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'public/'),
    publicPath: '/',
    filename: '[name].bundle.js'
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
    historyApiFallback: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
}

module.exports = browser
