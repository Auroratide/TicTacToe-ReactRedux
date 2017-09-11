var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  name: 'client',
  entry: path.join(__dirname, 'client', 'client.jsx'),
  devtool: 'eval-source-map',
  output: {
    filename: 'client.js',
    path: path.join(__dirname, 'public')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss']
  },
  module: {
    loaders: [ {
      test: /\.jsx?$/,
      loader: ['babel-loader']
    }, {
      test: /\.s?css$/,
      loaders: ExtractTextPlugin.extract( {
        fallback: 'style-loader',
        use: [ {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader',
          options: {
            includePaths: [path.resolve(__dirname, 'client', 'style')]
          }
        } ]
      } )
    } ]
  },
  plugins: [
    new ExtractTextPlugin('style.css')
  ]
};
