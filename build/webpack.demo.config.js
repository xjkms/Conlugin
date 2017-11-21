const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool: 'eval-source-map',
  entry: './examples/main.js',
  output: {
    path: path.resolve(__dirname, 'examples/'),
    filename: 'demo.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        },{
          loader: 'css-loader'
        },{
          loader: 'sass-loader'
        }]
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      }
    ]
  },
  devServer: {
    historyApiFallback: true,
    index: 'examples/index.html'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: 'examples/index.html',
      filename: 'examples/index.html'
    })
  ]
}
