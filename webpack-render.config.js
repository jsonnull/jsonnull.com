const {
  createConfig,
  customConfig,
  entryPoint,
  setOutput,
} = require('@webpack-blocks/webpack2')
const { common } = require('./webpack.config.js')

module.exports = createConfig(common.concat([
  entryPoint({
    render: './src/render.lsc',
  }),
  customConfig({
    target: 'node'
  }),
  setOutput({
    path: './public/',
    filename: 'render.js',
    library: 'render',
    libraryTarget: 'umd'
  })
]))
