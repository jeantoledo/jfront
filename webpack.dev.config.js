const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  entry: './app/app.js',
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: 'bundle.js'
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      template: 'app/index.html',
      inject: true
    })
  ],
  module: {
    rules: [
      { test: /\.html$/, exclude: /node_modules/, use: 'html-loader' },
      { test: /\.js$/, exclude: /node_modules/, use: "babel-loader" }
    ]
  }
}
