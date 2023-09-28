const webpackCommonConfig = require('./webpack.common');
const {merge} = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = merge(webpackCommonConfig, {
    mode: 'production',
    devtool: 'nosources-source-map',
    output: {
        publicPath: './',
        clean: true
    },
    performance: {
        hints: 'warning'
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                parallel: true
            }),
            new CssMinimizerPlugin({
                parallel: true
            })
        ],
        splitChunks: {
            chunks: 'all',
            minChunks: 1, // 分割前，被共享了多少次
            cacheGroups: {
                vender: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vender',
                    filename: 'js/[name].[hash:6].js',
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash:6].css'
        }),
        new CompressionPlugin()
    ]
});
