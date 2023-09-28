const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpackProdConfig = require('./webpack.prod');
const {merge} = require('webpack-merge');

module.exports = merge(webpackProdConfig, {
    plugins: [
        new BundleAnalyzerPlugin()
    ]
});
