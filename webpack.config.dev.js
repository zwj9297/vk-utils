const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  entry: {
    vk: path.resolve(__dirname, "example/index.js")
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/',
    filename: 'js/[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: "/node_modules/",
        loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader"]
      },
      { test: /\.vue$/, loader: "vue-loader" }
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ // 分离css
      filename: '[name]/style.css',
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "example/index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin()
  ],
  devServer: {
    disableHostCheck: true,
    historyApiFallback: true
  }

}