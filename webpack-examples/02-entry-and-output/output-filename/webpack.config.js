const path = require('path');

module.exports = {
    entry: {
        'partA': './partA.js',
        'partB': './partB.js',
        'index': './index.js',
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: '[name]-[chunkhash].js' // [name]-[chunkhash].js 添加chunkhash
    },
    devServer: {
        publicPath: "/dist/",
        port: 3000
    }
}
