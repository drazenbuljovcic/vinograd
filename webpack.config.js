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
            { test: /\.js/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\/src\/styles\/main.scss/, loader: extract.extract({ fallbackLoader: 'style-loader', loader: 'css-loader!postcss-loader!sass-loader'} )},
            { test: /\.(png|gif|jpe?g|svg)$/,
                loader: 'url-loader',
                query: {
                    limit: 10000,
                    name: 'images/[hash].[ext]'
                }
            }
        ]
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            filename: 'js/vendor.bundle.js',
            minChunks: Infinity,
            name: 'vendor'
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: [
                    autoprefixer({})
                ]
            }
        }),
        new extract('app.bundle.css')
    ]
}
