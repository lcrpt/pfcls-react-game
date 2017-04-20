const path = require('path');

const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/app/index.html`,
  filename: 'index.html',
  inject: 'body',
});

const config = {
  devtool: 'cheap-module-eval-source-map',

  entry: [
    path.resolve(__dirname, 'app/main.js'),
    path.resolve(__dirname, 'app/assets/scss/main.scss'),
  ],

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  devServer: {
    contentBase: path.join(__dirname, 'dist'),
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        include: path.resolve(__dirname, 'app'),
        loader: 'babel-loader',
        query: {
          presets: ['react-hmre'],
        },
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract({ fallbackLoader: 'style-loader', loader: 'css-loader!sass-loader' }),
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=15000',
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: 'file-loader' },
    ],
  },

  plugins: [
    HtmlWebpackPluginConfig,
    new ExtractTextPlugin('styles/style.css'),
    new CopyWebpackPlugin([{ from: 'app/vendors', to: 'vendors' }]),
    new OpenBrowserPlugin({ url: 'http://localhost:8080' }),
  ],
};

module.exports = config;
