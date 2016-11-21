var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry : {
        vanilla: "./src/vanilla/src/app.js",
        react: "./src/react/src/app.js",
        angular2: "./src/angular2/src/app.ts"
    },
    output: {
        filename: "./src/[name]/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['ts', 'angular2-template-loader']
            },
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
        }),
        new HtmlWebpackPlugin({
            chunks: ['angular2'],
            template: './src/angular2/index.html',
            filename: './src/angular2/index.html'
        })

    ],
    node: {
        fs: "empty"
    }

};