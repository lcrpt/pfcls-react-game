const webpack = require('webpack');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const host = 'localhost';
const port = 3002;

module.exports = {
  context: __dirname + '/tests',
  entry: {
    javascript: 'mocha!./index.js',
  },
  output: {
    filename: 'test.build.js',
    path: __dirname + '/tests',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query:
        {
          presets: ['react', 'es2015'],
        }
      },
      {
        test: /\.html$|\.css$/,
        loader: 'file?name=[name].[ext]',
      },
    ],
  },
  plugins: [
    new OpenBrowserPlugin({ url: 'http://' + host + ':' + port }),
  ],
  devServer: {
    host: host,
    port: port,
  },
  devtool: 'source-map',
};
