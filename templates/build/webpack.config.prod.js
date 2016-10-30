const base = require('./webpack.config.base')

module.exports = {
  entry: './src/<%= name %>.ts',
  output: {
    filename: 'dist/bundle.js'
  }
}
