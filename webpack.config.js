var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:1110',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: 'http://localhost:1110/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse(process.env.DEV || 'true'))
    })
  ],
  resolve: {
    alias: {
      'deep-learning-junior-devs-book': path.join(__dirname, 'packages', 'deep-learning-junior-devs-book'),
      // Guard against the error:
      // > If you're using NPM, make sure your dependencies don't drag duplicate React distributions
      // > into their node_modules and that require("react") corresponds to the React instance you render your app with.
      'react': path.join(__dirname, 'node_modules', 'react')
    },
    extensions: ['', '.js']
  },
  resolveLoader: {
    'fallback': path.join(__dirname, 'node_modules')
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: [/node_modules/, /packages/]
    }]
  }
}
