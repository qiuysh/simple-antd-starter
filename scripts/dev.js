/** @format */
const merge = require("webpack-merge");
const base = require("./base.js");
const webpack = require("webpack");

module.exports = merge(base, {
  // eslint-disable-next-line prettier/prettier
  
  mode: "development",

  devtool: "inline-source-map",

  plugins: [
    new webpack.DefinePlugin({
      __PRODUCTION: JSON.stringify(false),
    }),

    new webpack.HotModuleReplacementPlugin(),
  ],

  devServer: {
    contentBase: "./src",
    host: "0.0.0.0",
    port: 3001,
    hot: true,
    proxy: [
      {
        path: "/log/api/v2/**",
        target: "https://log.dtstack.com",
      },
    ],
  },
});
