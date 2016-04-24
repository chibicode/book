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
      exclude: [/node_modules/, /snippets/]
    }, {
      test: /\.css$/,
      loaders: ['style', 'css', 'postcss'],
      exclude: [/components/]
    }, {
      test: /components(.)+\.css$/,
      loaders: ['style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]', 'postcss']
    }, {
      test: /\.md$/,
      loaders: ['html', 'markdown']
    }, {
      test: /snippets/,
      loaders: ['raw']
    }]
  },
  postcss: function (webpack) {
    return [
      postcssImport({ addDependencyTo: webpack }),
      postcssCssnext
    ]
  }
}
