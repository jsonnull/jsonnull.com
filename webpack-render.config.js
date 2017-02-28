const {
  createConfig,
  customConfig,
  entryPoint,
  setOutput,
} = require('@webpack-blocks/webpack2')
const { common } = require('./webpack.config.js')

module.exports = createConfig(common.concat([
  entryPoint({
    render: './src/render.js',
  }),
  customConfig({
    target: 'node'
  }),
  setOutput({
    path: './public/',
    filename: './public/render.js',
    library: 'render',
    libraryTarget: 'umd'
  })
]))
