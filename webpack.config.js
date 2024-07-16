const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

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
      '~assets': path.resolve(__dirname, 'src/assets'),
      '~components': path.resolve(__dirname, 'src/components'),
      '~pages': path.resolve(__dirname, 'src/pages'),
      '~apis': path.resolve(__dirname, 'src/apis'),
      '~mocks': path.resolve(__dirname, 'src/mocks'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: ['babel-loader', 'ts-loader'],
      },
      // style-loader, css-loader 구성
      {
        test: /\.css$/i,
        exclude: /\.module\.css$/i, // 모듈 파일 제외 설정
        use: ['style-loader', 'css-loader'],
      },
      // CSS Module ([filename].module.css)
      {
        test: /\.module\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
      {
        test: /\.svg$/i,
        use: ['@svgr/webpack'],
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
