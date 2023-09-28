const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const ENV = process.env.NODE_ENV;
const IS_PRODUCT = ENV === 'production';

module.exports = {
    target: 'web',
    cache: {
        type: 'filesystem',
        allowCollectingMemory: true
    },
    entry: {
        app: path.resolve(__dirname, '../src/main.tsx')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'js/[name].[hash:8].bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.vue', '.json', '.scss', '.less', '.css'],
        alias: {
            '@': path.resolve(__dirname, '../src')
        },
        modules: [
            path.resolve(__dirname, '../src'),
            'node_modules'
        ]
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: [
                    IS_PRODUCT && 'babel-loader',
                    {
                        loader: 'esbuild-loader',
                        options: {
                            loader: 'tsx',
                            target: 'es2015',
                            jsxFactory: 'h',
                            jsxFragment: 'Fragment'
                        }
                    }
                ].filter(Boolean)
            },
            {
                test: /\.vue$/,
                exclude: /node_modules/,
                loader: 'vue-loader'
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                use: [
                    IS_PRODUCT ? MiniCssExtractPlugin.loader: 'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: [
                    IS_PRODUCT ? MiniCssExtractPlugin.loader: 'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    IS_PRODUCT ? MiniCssExtractPlugin.loader: 'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg|png|jpg|gif)(#.+)?$/,
                type: 'asset',
                generator: {
                    filename: 'image/[hash:8][ext][query]'
                },
                parser: {
                    dataUrlCondition: {
                        maxSize: 8 * 1024
                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../index.ejs'),
            templateParameters: {
                title: 'vue App',
                baseUrl: IS_PRODUCT ? './' : '/'
            }
        }),
        new VueLoaderPlugin(),
        new webpack.ProvidePlugin({
            h: ['vue', 'h'],
            Fragment: ['vue', 'Fragment']
        }),
        new webpack.DefinePlugin({
            process: JSON.stringify({
                env: {
                    NODE_ENV: process.env.NODE_ENV
                }
            })
        })
    ]
};
