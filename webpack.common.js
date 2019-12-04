const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Vivian Flower',
      inject: true,
      template: path.resolve(__dirname, './src/index.html'),
    })
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'vvflower')
  },
  resolve: {
    alias: {
      'vue': 'vue/dist/vue.js',
    }
  }
};