const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');
const webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: {
        app: path.resolve(__dirname, '../src/main.tsx')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[hash:6].bundle.js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.vue', '.json', '.scss', '.less', '.css'],
        alias: {
            '@': path.resolve(__dirname, '../src')
        }
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                    {
                        loader: 'esbuild-loader',
                        options: {
                            loader: 'tsx',
                            target: 'es2015',
                            jsxFactory: 'h',
                            jsxFragment: 'Fragment'
                        }
                    }
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.(woff|woff2|ttf|eot|svg|png|jpg)(#.+)?$/,
                use: [
                    {
                        loader: 'url-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html')
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
