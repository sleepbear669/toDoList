var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry : {
        vanilla: "./src/vanilla/js/app.js",
        react: "./src/react/js/app.js",
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
                    presets: ['es2015', 'stage-2', 'react']
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            chunks: ['vanilla'],
            template: './src/vanilla/index.html',
            filename: './src/vanilla/index.html'
        }),
        new HtmlWebpackPlugin({
            chunks: ['react'],
            template: './src/react/index.html',
            filename: './src/react/index.html'
        })
    ],
    node: {
        fs: "empty"
    }

};