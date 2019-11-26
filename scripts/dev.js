/** @format */
const path = require("path");
const webpack = require("webpack");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  devtool: "inline-source-map",

  entry: path.join(__dirname, "../src/index"),

  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    chunkFilename: "[name].bundle.js",
  },

  module: {
    rules: [
      {
        test: /\.ts[x]?$/,
        include: path.join(__dirname, "../src"),
        use: [
          "babel-loader",
          {
            loader: "awesome-typescript-loader",
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      //   {
      //     enforce: "pre",
      //     test: /\.js$/,
      //     include: path.join(__dirname, '../src'),
      //     use: [
      //       {
      //         loader: 'source-map-loader',
      //         options: {
      //           cacheDirectory: true,
      //         }
      //       }
      //     ]
      //   },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              modules: true,
              localIdentName: "[name]__[local]-[hash:5]",
            },
          },
          "postcss-loader",
        ],
      },
      {
        test: /\.less$/,
        use: ["style-loader", "css-loader", "less-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)(\?[tv]=[\d.]+)*$/,
        exclude: /node_modules/,
        use: ["file-loader?name=assets/images/[name].[ext]"],
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
    new webpack.DefinePlugin({
      __PRODUCTION: JSON.stringify(false),
    }),

    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: function() {
          return [
            autoprefixer({
              browsers: [
                "defaults",
                "not ie < 11",
                "last 2 versions",
                "> 1%",
                "iOS 7",
                "last 3 iOS versions",
              ],
            }),
          ];
        },
      },
    }),

    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /(zh-cn).js/),

    new webpack.HotModuleReplacementPlugin(),

    new HtmlWebpackPlugin({
      title: "react_System",
      filename: "index.html",
      template: path.join(__dirname, "..", "src", "template.ejs"),
      favicon: path.join(
        __dirname,
        "..",
        "src",
        "assets",
        "images",
        "favicon.ico",
      ),
    }),
  ],

  resolve: {
    modules: ["node_modules"],
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
    alias: {
      "@utils": path.join(__dirname, "..", "src", "utils"),
    },
  },

  devServer: {
    contentBase: "./src",
    host: "0.0.0.0",
    port: 3001,
    hot: true,
    // proxy: [
    // {
    //   path: '/log/api/v2/**',
    //   // target: 'https://log.dtstack.com',
    //   target: 'http://172.16.10.61:81',
    //   // target: 'http://172.16.8.183:81',
    //   changeOrigin: true,
    // },
    // ],
  },
};
