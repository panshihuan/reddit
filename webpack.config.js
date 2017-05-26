var path = require('path');
var HtmlwebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var APP_PATH = path.resolve(ROOT_PATH, 'app');
var BUILD_PATH = path.resolve(ROOT_PATH, 'build');

module.exports = {
  entry: APP_PATH,
  output: {
    path: BUILD_PATH,
    filename: 'bundle.js'
  },

  resolve: {
      extensions: ['.js', '.jsx']
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: APP_PATH
      }
    ]
  },

  plugins: [
    new HtmlwebpackPlugin({
      title: '走redux官方文档',
      template:path.resolve(APP_PATH, 'index.html'),
      filename: 'index.html'
    })
  ],


  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    // progress: true,
  }

};