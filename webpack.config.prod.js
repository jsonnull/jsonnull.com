const webpack = require('webpack')
const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
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
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: {
          arrows: false,
          booleans: false,
          collapse_vars: false,
          comparisons: false,
          computed_props: false,
          hoist_funs: false,
          hoist_props: false,
          hoist_vars: false,
          if_return: false,
          inline: false,
          join_vars: false,
          keep_infinity: true,
          loops: false,
          negate_iife: false,
          properties: false,
          reduce_funcs: false,
          reduce_vars: false,
          sequences: false,
          side_effects: false,
          switches: false,
          top_retain: false,
          toplevel: false,
          typeofs: false,
          unused: false,

          // Switch off all types of compression except those needed to convince
          // react-devtools that we're using a production build
          conditionals: true,
          dead_code: true,
          evaluate: true
        },
        mangle: true,
        parallel: true
      }
    }),
    new webpack.HashedModuleIdsPlugin(),
    new ManifestPlugin()
  ]
}

module.exports = browser
