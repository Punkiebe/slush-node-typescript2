const base = require('./webpack.config.base')
const { merge } = require('lodash')

module.exports = merge(base, {
  entry: './src/<%= name %>.ts',
  output: {
    filename: 'dist/bundle.js'
  }
})
