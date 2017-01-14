const webpack = require('webpack'),
    extract = require('extract-text-webpack-plugin'),
    autoprefixer = require('autoprefixer'),
    path = require('path');

module.exports = {
    "entry": {
        "app": path.join(__dirname, 'src', 'js', 'main.js'),
        "vendor": path.join(__dirname, 'src', 'js', 'vendor.js')
    },
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'js/app.bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js/, loader: 'babel', presets: ['es2015'], exclude: /node_modules/ },
            { test: /\.sass/, loader: extract.extract('style', '!css!postcss!sass') }
        ]
    },
    postcss: [
        autoprefixer({})
    ],
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            filename: 'js/vendor.bundle.js',
            minChunks: Infinity,
            name: 'vendor'
        }),
        new extract('app.bundle.css')
    ]
}
