var path = require('path')
var postcssCssnext = require('postcss-cssnext')
var postcssImport = require('postcss-import')

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
    }, {
      test: /\.md$/,
      loaders: ['html', 'markdown']
    }]
  },
  postcss: function (webpack) {
    return [
      postcssImport({ addDependencyTo: webpack }),
      postcssCssnext
    ]
  }
}
