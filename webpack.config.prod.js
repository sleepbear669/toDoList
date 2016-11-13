var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry : {
        vanilla: "./src/vanilla/src/app.js"
    },
    output: {
        path: "[name]",
        filename: "app.[hash].js"
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
        new HtmlWebpackPlugin({
            inject: false,
            chunks: ['vanilla'],
            filename: './src/vanilla/index.html'
        }),
        new HtmlWebpackPlugin({
            inject: false,
            filename: './src/react/index.html'
        })
    ],
    node: {
        fs: "empty"
    }
};