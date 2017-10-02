const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const webpackPlugins = [
  new CleanWebpackPlugin(['dist']),
  new HtmlWebpackPlugin({
    template: 'app/index.html',
    inject: true
  })
];

const webpackModuleRules = [
  { test: /\.html$/, exclude: /node_modules/, use: 'html-loader' },
  { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" }
];

module.exports = {
  entry: './app/app.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js'
  },
  plugins: webpackPlugins,
  module: { rules: webpackModuleRules }
}
