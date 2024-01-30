const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
   entry: {
     index: './src/index.js',
   },
   devServer: {
    static: './dist',
   },
   mode: 'development',
   plugins: [
    new HtmlWebpackPlugin({
      title: 'Odin To-Do',
    }),
  ],
   output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
   },
 };