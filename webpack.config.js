const webpack = require('webpack');
var LiveReloadPlugin = require('webpack-livereload-plugin');
var path = require('path');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'bin'),
    publicPath: 'bin',
    filename: 'app.bundle.js',
  },
  module: {
    loaders: [{
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader',
    }]
  },
  devtool: "source-map"

}

