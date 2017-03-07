const {
  createConfig,
  customConfig,
  entryPoint,
  setOutput,
} = require('@webpack-blocks/webpack2')
const { common } = require('./webpack.config.js')

module.exports = createConfig(common.concat([
  entryPoint('./content/index.jsonnull'),
  setOutput({
    path: './public',
    filename: 'content.js'
  })
]))
