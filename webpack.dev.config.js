const HtmlWebpackPlugin = require('html-webpack-plugin');

const entries = {
  bundle: './app/app.js',
  vendor: './app/vendors/vendor.js',
};

const modules = {
  rules: [
    { test: /\.html$/, exclude: /node_modules/, use: 'html-loader' },
    { test: /\.js$/, exclude: /node_modules/, use: 'babel-loader' },
    { test: /\.scss$/, exclude: /node_modules/, use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'sass-loader' }] },
  ],
};

const plugins = [
  new HtmlWebpackPlugin({
    template: 'app/index.html',
    inject: true,
  }),
];

module.exports = {
  entry: entries,
  module: modules,
  plugins,
  devServer: {
    contentBase: '/',
    port: 3000,
  },
  output: {
    path: '/',
    filename: '[name].[chunkhash].js',
  },
};
