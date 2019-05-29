var webpack = require('webpack');
var merge = require('webpack-merge');
var baseConfig = require('./webpack.config.base.js');
var path = require('path');

module.exports = merge(baseConfig,{
    output: {
        path:path.resolve(__dirname,'./dist'),
        filename:'js/[name].[hash].bundle.js',
        publicPath: '/'
    },
    mode: 'development',
    devServer: {
        historyApiFallback: {
            rewrites: [
                { from: /^\/sys\/login/, to: '/view/login.html' },
                { from: /^\/sys\/home/, to: '/view/home.html' },
                { from: /^\/sys\/detail/, to: '/view/detail.html' }
              ]
        },
        inline: true,
        port: 8888,
        proxy: {
            '/api': {
                target: 'http://api.douban.com/v2',
                changeOrigin: true,
                secure: false,
                pathRewrite: {'^/api' : ''}
            }
        }
    },
    devtool : 'source-map',
    plugins:[]
});