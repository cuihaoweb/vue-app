const webpackCommonConfig = require('./webpack.common');
const {merge} = require('webpack-merge');

module.exports = merge(webpackCommonConfig, {
    mode: 'development',
    devtool: 'source-map',
    devServer: {
        port: 8080,
        hot: true,
        open: true,
        client: {
            overlay: false
        }
    }
});
