/** @format */
const path = require("path");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  entry: {
    app: path.join(__dirname, "../src/index"),
  },

  output: {
    path: path.join(__dirname, "../dist"),
    filename: devMode
      ? "bundle.js"
      : "[name].[chunkhash:8].js",
    chunkFilename: devMode
      ? "[name].bundle.js"
      : "[id].chunk.[chunkhash:8].js",
  },

  module: {
    rules: [
      {
        test: /\.ts[x]?$/,
        include: path.join(__dirname, "../src"),
        use: [
          {
            loader: "babel-loader",
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          devMode
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
        ],
      },
      {
        test: /\.less$/,
        use: [
          devMode
            ? "style-loader"
            : MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "less-loader", // compiles Less to CSS
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)(\?[tv]=[\d.]+)*$/,
        exclude: /node_modules/,
        use: [
          "file-loader?name=assets/images/[name].[ext]",
        ],
      },
      {
        test: /\.(svg|woff|woff2|ttf|eot)(\?[tv]=[\d.]+)*$/,
        exclude: /node_modules/,
        use: ["file-loader?name=assets/fonts/[name].[ext]"],
      },
      {
        test: /\.html$/,
        use: ["raw-loader"],
      },
      {
        test: /\.ejs$/,
        use: ["ejs-loader"],
      },
      {
        test: /\.json$/,
        use: ["json-loader"],
      },
    ],
  },

  plugins: [
    new webpack.ContextReplacementPlugin(
      /moment[\/\\]locale$/,
      /(zh-cn).js/,
    ),

    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      options: {
        postcss: function() {
          return [
            autoprefixer({
              browsers: ["last 2 version"],
            }),
          ];
        },
      },
    }),

    new HtmlWebpackPlugin({
      title: "react_System",
      filename: "index.html",
      template: path.join(
        __dirname,
        "..",
        "src",
        "template.ejs",
      ),
      favicon: path.join(
        __dirname,
        "..",
        "src",
        "assets",
        "images",
        "favicon.ico",
      ),
    }),

    new MiniCssExtractPlugin({
      filename: "[name].[hash:8].css",
      chunkFilename: "[name].[hash:8].css",
    }),
  ],

  resolve: {
    modules: ["node_modules"],
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    alias: {
      "@components": path.join(
        __dirname,
        "../src/components",
      ),
      "@pages": path.join(__dirname, "../src/pages"),
      "@utils": path.join(__dirname, "../src/utils"),
    },
  },
};
