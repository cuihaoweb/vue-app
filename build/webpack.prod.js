const webpackCommonConfig = require('./webpack.common');
const {merge} = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

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
                initialVender: {
                    priority: 20,
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'initial',
                    name: 'initialVender',
                    filename: 'js/[name].[hash:8].js'
                },
                vender: {
                    priority: 10,
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',
                    name: 'vender',
                    filename: 'js/[name].[hash:8].js'
                }
            }
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].[hash:8].css'
        }),
        new CompressionPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, '../public'),
                    to: path.resolve(__dirname, '../dist')
                }
            ]
        })
    ]
});
