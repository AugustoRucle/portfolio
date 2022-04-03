const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/index.js'),

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist'),
    },

    resolve: {
        extensions: ['.mjs', '.js', '.json', '.jsx'],
    },

    module: {
        rules: [
            {
                test: /\.(html)$/,
                use: [
                    { loader: 'html-loader' }
                ]
            },
            {
                test: /\.(js|jsx|.mjs)$/,
                exclude: /node_modules/,
                resolve: {
                    extensions: ['*', '.js', '.jsx'],
                },
                use: ['babel-loader'],
            },
            {
                test: /\.(sc|c|sa)ss$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 2,
                        },
                    },
                    { loader: 'scoped-css-loader' },
                    {
                        loader: 'sass-loader',
                    },
                ],
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192,
                        },
                    },
                ],
                type: 'javascript/auto'
            },
        ],
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),

        new HtmlWebpackPlugin({
            inject: true,
            template: path.resolve(__dirname, './public/index.html'),
            filename: './index.html'
        }),
    ],

    devServer: {
        static: {
            directory: path.resolve(__dirname, './dist'),
        },
        compress: true,
        port: 3006
    },
};