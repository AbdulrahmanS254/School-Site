const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const path = require("path");

module.exports = {
    entry: {
        dist: "./src/index.js",
        student2: "./src/assets/sass/student-2.scss",
    },

    output: {
        filename: "[name].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },

    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },

            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass"),
                        },
                    },
                ],
            },

            {
                test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
                type: "asset/resource",
                generator: {
                    filename: "assets/images/[name][ext]",
                },
            },

            {
                test: /\.(mp4|webm|ogg)$/,
                type: "asset/resource",
                generator: {
                    filename: "assets/vids/[name][ext]",
                },
            },

            {
                test: /\.(svg|eot|woff|woff2|ttf)$/,
                exclude: /images/,
                type: "asset/resource",
                generator: {
                    filename: "assets/fonts/[name][ext]",
                },
            },

            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
        ],
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: "./src/index.html",
            chunks: ['dist'],
            inject: "body",
        }),
        new HtmlWebpackPlugin({
            filename: "student-1.html",
            template: "./src/student-1.html",
            chunks: ['dist'],
            inject: "body",
        }),
        new HtmlWebpackPlugin({
            filename: "student-2.html",
            template: "./src/student-2.html",
            chunks: ['dist', 'student2'],
            inject: "body",
        }),
        new HtmlWebpackPlugin({
            filename: "sign-in.html",
            template: "./src/sign-in.html",
            chunks: ['dist'],
            inject: "body",
        }),
        new HtmlWebpackPlugin({
            filename: "sign-up.html",
            template: "./src/sign-up.html",
            chunks: ['dist'],
            inject: "body",
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: "assets/css/[name].css",
        }),
    ],

    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin(),
        ],
        splitChunks: {
            chunks: "all",
        },
    },

    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        compress: true,
        port: 9008,
        devMiddleware: {
            writeToDisk: true,
        },
        open: true,
        hot: false,
    },
};
