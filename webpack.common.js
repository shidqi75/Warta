const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
    entry: ["./src/index.js"],
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
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            favicon: "./src/assets/images/logo.png",
            template: "./src/index.html",
            filename: "index.html",
            minify: "production",
        }),
    ],
};
