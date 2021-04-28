/*
 * @Author: wulin
 * @Date: 2021-04-22 19:42:43
 * @LastEditors: wulin
 * @LastEditTime: 2021-04-27 17:11:38
 * @Description: xxxx
 * @FilePath: /react_system/scripts/prod.js
 */
const merge = require("webpack-merge");
const base = require("./base.js");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const os = require("os");

module.exports = merge(base, {

  mode: "production",

  // devtool: "cheap-module-source-map",
  
  optimization: {
    minimizer: [
      // 用于配置 minimizers 和选项
      // new TerserPlugin({
      //   // 加快构建速度
      //   cache: true,
      //   // 开启多线程
      //   parallel: os.cpus().length - 1,
      //   terserOptions: {
      //     // 打包时将无用代码去除
      //     compress: {
      //       unused: true,
      //       drop_debugger: true,
      //       drop_console: true,
      //       dead_code: true
      //     }
      //   }
      // }),

      new OptimizeCSSAssetsPlugin({}),
    ],
    
    splitChunks: {
      minSize: 30000,
      maxSize: 900000,
      chunks: "all",
      minChunks: 1,
      maxAsyncRequests: 6,
      maxInitialRequests: 3,
      name: true,
      cacheGroups: {
        vendors: {
          name: "vendors",
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
          chunks: "all",
        }
      },
    },
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash:8].css",
      chunkFilename: "assets/styles/[name]_[chunkhash:8].css"
    }),

    new webpack.HashedModuleIdsPlugin(), // 实现持久化缓存
  ],
});
