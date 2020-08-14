const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: [
        "./src/index.js",
        // "font-awesome/scss/font-awesome.scss"
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.(css|scss)$/,
                use: [
                    {
                        loader: "style-loader",
                    },
                    {
                        loader: "css-loader",
                    },
                    {
                        loader: "sass-loader",
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            plugins: function () {
                                return [require("autoprefixer")];
                            },
                        },
                    },
                ],
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    "file-loader?name=assets/images/[name].[ext]",
                    "image-webpack-loader?bypassOnDebug",
                ],
            },
            // {
            //     test: /font-awesome\.config\.js/,
            //     use: [
            //         { loader: "style-loader" },
            //         { loader: "font-awesome-loader" },
            //     ],
            // },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon: "./src/assets/images/favicon.png",
            template: "./src/index.html",
            filename: "index.html",
            minify: "production",
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
        }),
    ],
};
