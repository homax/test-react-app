var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        app: ['babel-polyfill', './js/app.js']
    },
    output: {
        path: __dirname + '/public/build/',
        publicPath: '/public/build/',
        filename: '[name].js',
    },
    module: {
        loaders: [
            { test: /\.json$/, loader: 'json', include: path.join(__dirname, 'js') },
            {
                test: /\.jsx?$/,
                loaders: ['react-hot', 'babel?cacheDirectory=/tmp/&presets[]=react,presets[]=es2015,presets[]=stage-0'],
                include: path.join(__dirname, 'js')
            },
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') },
        ]
    },
    resolve: {
        root: path.resolve('./js/modules'),
        extensions: ['', '.js', '.jsx'],
        alias: {
            data          : __dirname + '/js/data',
            dispatcher    : __dirname + '/js/dispatcher',
            components    : __dirname + '/js/components',
            containers    : __dirname + '/js/containers',
        }
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new ExtractTextPlugin('[name].css', {allChunks: true})
    ],

    devServer: {
        host: 'localhost',
        port: 3000,
        hot: true
    }
};

