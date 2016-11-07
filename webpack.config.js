var webpack = require('webpack');

module.exports = {
    entry : {
        vanilla: "./src/vanilla/src/app.js"
    },
    output: {
        filename: "./src/[name]/bundle.js"
    }
};