const { defineConstants, env, sourceMaps } = require('@webpack-blocks/webpack2')
const postcss = require('@webpack-blocks/postcss')
const cssModules = require('@webpack-blocks/css-modules')
const extractText = require('@webpack-blocks/extract-text2')
const lightscript = require('./webpack/lightscript')
const static = require('./webpack/static')
const content = require('./webpack/content')
const render = require('./webpack/render')
const directoryNamed =  require('./webpack/directoryNamed')

const customResolve = () => (context) => ({
  resolve: {
    modules: ['node_modules', 'src'],
    extensions: ['.lsc']
  }
})

module.exports = {
  common: [
    // loaders
    lightscript(),
    postcss(require('./postcss.config.js')),
    cssModules(),
    static(),
    content('content/index.jsonnull'),
    render('[name].html'),
    // development
    defineConstants({
      'process.env.NODE_ENV': process.env.NODE_ENV
    }),
    env('development', [
      sourceMaps()
    ]),
    // resolve
    directoryNamed(),
    customResolve(),
    // plugins
    extractText('style.css')
  ]
}
