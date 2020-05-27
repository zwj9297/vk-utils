const merge = require('webpack-merge');
const base = require('./webpack.config.base');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = merge(base, {
  mode: "production",
  plugins: [
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      cssProcessorOptions: {
        safe: true,
        discardComments: { removeAll: true }
      },
      canPrint: true
    })
  ]
})
