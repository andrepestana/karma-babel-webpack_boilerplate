const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/web/js/main.js',
  output: {
    path: path.resolve(__dirname, 'dist/web/'),
    filename: 'js/bundle.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'src/web'),
  },
  module: {
     rules: [
       {
         test: /\.js$/,
         exclude: /(node_modules|bower_components)/,
         use: [
           'babel-loader'
         ]
       },
       {
        test: /\.css$/,
        use: [
            'style-loader',
            'css-loader'
        ]
       },
       {
        test: /\.html$/,
        use: [
            'html-loader'
        ]
       },
       {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
              publicPath: 'img/',
              esModule: false
            }
          }
        ]
       }       
     ]
  },
  plugins: [ 
    new HtmlWebpackPlugin({
      template: 'src/web/index.html'
    }),
    new CleanWebpackPlugin({
      cleanAfterEveryBuildPatterns: ['dist/web']
    })
  ]
};
new webpack.ProvidePlugin({
  $: 'jquery',
    jQuery: 'jquery'
});