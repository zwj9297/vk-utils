const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: {
    babelPolyfill: 'babel-polyfill',
    main: path.resolve(__dirname, "src/main.js")
  },
  output: {
    filename: "js/[name].[chunkhash:8].js",
    path: path.resolve(__dirname, "dist"),
    publicPath: '/'
  },
  resolve: {
    extensions: [".js", ".vue", "json"],
    alias: {
      "@": path.resolve("src"),
      "images": path.resolve("src/assets/images"),
      "views": path.resolve("src/views"),
      "components": path.resolve("src/components")
    },
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
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "less-loader", "postcss-loader"]
      },
      {
        test: /\.(png|svg|jpe?g)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192,
              name: "images/[name].[hash:7].[ext]",
              esModule: false,
              publicPath: "/",
            },
          },
        ],
      },
      { test: /\.vue$/, loader: "vue-loader" },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({ // 分离css
      filename: 'css/[name].[hash].css',
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "public/index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
      },
    }),
    new VueLoaderPlugin(),
    new CleanWebpackPlugin()
  ]
};
