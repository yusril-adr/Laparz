const { merge } = require('webpack-merge');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const dev = require('./webpack.dev');

module.exports = merge(dev, {
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
});
