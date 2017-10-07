const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const entries = {
  bundle: './app/app.js',
};

const extractSass = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
});

const modules = {
  rules: [
    { test: /\.html$/, exclude: /node_modules/, use: 'html-loader' },
    { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
    { test: /\.scss$/, exclude: /node_modules/, use: extractSass.extract({ use: [{ loader: 'css-loader', options: { minimize: true } }, { loader: 'sass-loader' }] }) },
  ],
};

const plugins = [
  extractSass,
  new CleanWebpackPlugin(['dist']),
  new webpack.optimize.UglifyJsPlugin({ minimize: true }),
  new HtmlWebpackPlugin({
    template: 'app/index.html',
    inject: true,
  }),
];

module.exports = {
  entry: entries,
  module: modules,
  plugins,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
};
