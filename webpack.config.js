const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const prod = process.env.NODE_ENV === 'production';

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {
      '~components': path.resolve(__dirname, 'src/components'),
      '~pages': path.resolve(__dirname, 'src/pages'),
      '~assets': path.resolve(__dirname, 'src/assets'),
      '~styles': path.resolve(__dirname, 'src/lib/styles'),
      '~utils': path.resolve(__dirname, 'src/lib/utils'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
      },
    ],
  },
  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
    }),
    // for webpack-dev-server
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    historyApiFallback: true,
    port: 3000,
    hot: true,
  },
};
