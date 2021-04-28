const path = require("path");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin")

const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  entry: {
    app: path.join(__dirname, "../src/app"),
  },

  output: {
    path: path.join(__dirname, "../dist"),
    publicPath: "/",
    filename: devMode ? "[name].bundle.js" : "[name]_[chunkhash:8].js",
    chunkFilename: devMode ? "[name].bundle.js" : "[name].chunk_[chunkhash:8].js",
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
        test: /\.ejs$/,
        use: ["ejs-loader"],
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
      title: "wolin 3C",
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
      inject: false,
      minify: true
    }),

    // new MiniCssExtractPlugin({
    //   filename: devMode ? "[name].css" : "[name].[chunkhash:8].css",
    //   chunkFilename: devMode ? "[name].css" :  "[name].[chunkhash:8].css",
    // }),

    new HardSourceWebpackPlugin(),
  ],

  resolve: {
    modules: ["node_modules"],
    extensions: [".ts", ".tsx", ".js", ".json"],
    alias: {
      "@components": path.join(__dirname, "../src/components"),
      "@pages": path.join(__dirname, "../src/pages"),
      "@utils": path.join(__dirname, "../src/utils"),
    },
  },
};
