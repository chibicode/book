var path = require('path')
var postcssImport = require('postcss-import')
var postcssCustomMedia = require('postcss-custom-media')
var postcssCustomProperties = require('postcss-custom-properties')
var postcssCalc = require('postcss-calc')
var postcssColorFunction = require('postcss-color-function')
var postcssDiscardComments = require('postcss-discard-comments')
var autoprefixer = require('autoprefixer')

module.exports = {
  entry: [
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    library: true,
    libraryTarget: 'commonjs2'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      loaders: ['style', 'css', 'postcss']
    }]
  },
  postcss: function (webpack) {
    return [
      postcssImport({ addDependencyTo: webpack }),
      postcssCustomMedia,
      postcssCustomProperties,
      postcssCalc,
      postcssColorFunction,
      postcssDiscardComments,
      autoprefixer
    ]
  }
}
