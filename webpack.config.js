const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    entry: {
        index: [
            './src/style.css',
        ],
    },
  
    output: {
        path: path.resolve(__dirname, './public'),
        clean: true,
    },
    
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'style.css',
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            inject: false,
        }),
    ],

    module: {
        rules: [
            {
                test: /\.css$/i,

                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                ],
            },
            {
                test: /\.(png|svg|jpg)$/,
                type: 'asset/resource',
                generator: {
                  filename: 'assets/[hash][ext][query]',
                }
            },
        ],
    },
};