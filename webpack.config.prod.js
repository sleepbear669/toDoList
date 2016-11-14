var HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry : {
        vanilla: "./src/vanilla/src/app.js"
    },
    output: {
        filename: "[name]/app.[hash].js"
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                loader: 'babel', // 'babel-loader' is also a legal name to reference
                query: {
                    cacheDirectory: true,
                    presets: ['es2015', 'stage-2']
                }
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['vanilla', 'react', 'angular2']),
        new HtmlWebpackPlugin({
            chunks: ['vanilla'],
            template: './src/vanilla/index.html',
            filename: './vanilla/index.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            template: './src/react/index.html',
            filename: './react/index.html'
        })
    ],
    node: {
        fs: "empty"
    }
};