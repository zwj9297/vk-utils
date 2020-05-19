const path = require('path')
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    vk: path.resolve(__dirname, "src/index.js")
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: '[name].js',
    library: 'vk',
    libraryTarget: 'umd'
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
      filename: 'theme-chalk/[name].css',
    }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin()
  ]

}