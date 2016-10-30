module.exports = {
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx', '']
  },
  devtool: 'eval-source-map',
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['latest-minimal'],
          plugins: [
            'transform-runtime',
            'transform-decorators-legacy',
            'transform-class-properties'
            'transform-regenerator',
            'add-module-exports',
            'syntax-async-functions'
          ]
        }
      }
    ]
  }
