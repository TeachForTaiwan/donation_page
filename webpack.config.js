const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BabiliPlugin = require("babili-webpack-plugin");
const webpack = require('webpack');

function resolve (dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  entry: './src/main.js',
  devServer: {
    contentBase: './dist',
    hot: true
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue': 'vue/dist/vue.js',
      '@': resolve('src'),
    }
  },
  module: {
    rules: [
      {
        test: /\.pug$/,
        use: [
          'html-loader',
          'pug-html-loader?exports:false'
        ]
      },
      {
        test: /\.(scss|css)$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'sass-loader',
          ],
          publicPath: path.resolve(__dirname, 'dist')
        })
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: [resolve('src')]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        use: [
          'file-loader?name=assets/[name].[ext]'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
        options: {
          loaders: {
            css: ExtractTextPlugin.extract({
              fallback: 'style-loader',
              use: [
                'css-loader',
                'sass-loader',
              ]
            })
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/views/index.pug'
    }),
    new ExtractTextPlugin({
      filename: 'main.css',
      disable: false,
      allChunks: true
    }),
    new BabiliPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ]
};
