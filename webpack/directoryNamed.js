const DirectoryNamedPlugin =  require('directory-named-webpack-plugin')

const directoryNamed = () => (context) => ({
  resolve: {
    plugins: [
      new DirectoryNamedPlugin()
    ]
  }
})

module.exports = directoryNamed
