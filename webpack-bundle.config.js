const {
  createConfig,
  customConfig,
  entryPoint,
  setOutput
} = require('@webpack-blocks/webpack2')
const { common } = require('./webpack.config.js')

module.exports = createConfig(common.concat([
  entryPoint('./src/index.lsc'),
  setOutput({
    path: './public',
    filename: 'bundle.js',
    library: 'render',
    libraryTarget: 'umd'
  }),
  customConfig({
    externals: {
      fs: 'fs'
    }
  })
]))
