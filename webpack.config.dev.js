var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry : {
        vanilla: "./src/vanilla/src/app.js"
    },
    output: {
        filename: "./src/[name]/bundle.js"
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
            chunk: ['vanilla'],
            template: './src/vanilla/index.html',
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