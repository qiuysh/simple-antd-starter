const path = require("path");
const merge = require("webpack-merge");
const base = require("./base.js");
const webpack = require("webpack");
const apiMocker = require("mocker-api");

module.exports = merge(base, {
  mode: "development",

  devtool: "inline-source-map",

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],

  devServer: {
    contentBase: "./src",
    host: "0.0.0.0",
    port: 3001,
    historyApiFallback: true,
    hot: true,
    before: function(app) {
      apiMocker(app, path.resolve("./mock/index.js"), {
        proxy: {
          "/api/v1/**": "http://127.0.0.1:3001",
        },
        secure: false,
        changeHost: true,
      });
    },
    proxy: [
      {
        path: "/api/v1/**",
        target: "http://127.0.0.1:3001",
      },
    ],
  },
});
