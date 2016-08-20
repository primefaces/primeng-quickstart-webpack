var webpack = require("webpack");

module.exports = {
    entry: {
        'polyfills': './app/polyfills.js',
        'vendor': './app/vendor.js',
        'app': './app/main.js'
    },
    output: {
        path: __dirname,
        filename: "./prod/[name].js"
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        })
    ]
};