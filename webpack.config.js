const {
  createConfig,
  defineConstants,
  env,
  entryPoint,
  setOutput,
  sourceMaps
} = require('@webpack-blocks/webpack2')
const babel = require('@webpack-blocks/babel6')
const postcss = require('@webpack-blocks/postcss')
const cssModules = require('@webpack-blocks/css-modules')
const extractText = require('@webpack-blocks/extract-text2')
const markdown = require('./webpack/markdown')
const content = require('./webpack/content')
const static = require('./webpack/static')
const directoryNamed =  require('./webpack/directoryNamed')

const customResolve = () => (context) => ({
  resolve: {
    modules: ['node_modules', 'src']
  }
})

module.exports = createConfig([
  entryPoint(['./content/index.jsonnull', './src/index.js']),
  // noOutput(),
  setOutput('./public/bundle.js'),
  // loaders
  static(),
  content('content/index.jsonnull'),
  markdown('[name].html'),
  // transpilers
  babel(),
  postcss(),
  cssModules(),
  // development
  defineConstants({
    'process.env.NODE_ENV': process.env.NODE_ENV
  }),
  env('development', [
    sourceMaps()
  ]),
  // resolve
  customResolve(),
  directoryNamed(),
  // plugins
  extractText('style.css', 'text/css')
])
