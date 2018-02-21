const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const entries = {
  bundle: './app/app.jsx',
  vendor: ['react', 'react-dom', 'prop-types'],
};

const extractSass = new ExtractTextPlugin({ filename: '[name].[contenthash].css' });
const cssOptions = { minimize: true };
const cssModulesOptions = {
  minimize: true,
  modules: true,
  importLoaders: 1,
  localIdentName: '[name]__[local]___[hash:base64:5]',
};

const modules = {
  rules: [
    { test: /\.html$/, exclude: /node_modules/, use: 'html-loader' },
    { test: /\.jsx?$/, exclude: /node_modules/, use: 'babel-loader' },
    { test: /app.scss/, exclude: /node_modules/, use: extractSass.extract({ use: [{ loader: 'css-loader', options: cssOptions }, { loader: 'sass-loader' }] }) },
    { test: /\.scss$/, exclude: [/node_modules/, path.resolve(__dirname, 'app/app.scss')], use: extractSass.extract({ use: [{ loader: 'css-loader', options: cssModulesOptions }, { loader: 'sass-loader' }] }) },
    { test: /\.(png|jp(e*)g|svg)$/, use: [{ loader: 'url-loader', options: { limit: 8000, name: 'images/[name].[hash].[ext]' } }] },
  ],
};

const plugins = [
  extractSass,
  new CleanWebpackPlugin(['dist']),
  new webpack.optimize.UglifyJsPlugin({ minimize: true }),
  new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
  new HtmlWebpackPlugin({
    template: 'app/index.html',
    favicon: 'favicon.ico',
    inject: true,
  }),
];

module.exports = {
  entry: entries,
  module: modules,
  plugins,
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash].js',
  },
};
