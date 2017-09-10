var path = require('path');

module.exports = {
  name: 'client',
  entry: path.join(__dirname, 'client', 'client.jsx'),
  devtool: 'eval-source-map',
  output: {
    filename: 'client.js',
    path: path.join(__dirname, 'public')
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  module: {
    loaders: [ {
      test: /\.jsx?$/,
      loader: ['babel-loader']
    } ]
  }
};
