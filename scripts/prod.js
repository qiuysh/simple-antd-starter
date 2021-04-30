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
      new TerserPlugin({
        // 加快构建速度
        cache: true,
        // 开启多线程
        parallel: os.cpus().length - 1,
        extractComments: false,
        terserOptions: {
          format: {
            // 删除注释
            comments: false,
          },
          output: { 
            comments: false 
          },
          // 打包时将无用代码去除
          compress: {
            unused: true,
            drop_debugger: true,
            drop_console: true,
            dead_code: true
          }
        }
      }),

      new OptimizeCSSAssetsPlugin({}),
    ],
    
    splitChunks: {
      minSize: 30000,
      // maxSize: 900000,
      chunks: "initial",
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: true,
      cacheGroups: {
        vendors: {
          name: "vendors",
          test: /[\\/]node_modules[\\/](react|react-dom|react-router-dom)[\\/]/,
          chunks: "all",
          priority: 10,
        },
        common: {
          name: 'common', // 打包后的文件名
          chunks: 'initial',
          priority: 2,
          minChunks: 2, // 重复2次才能打包到此模块
          reuseExistingChunk: true
        },
      },
    },
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash:8].css",
      chunkFilename: "assets/styles/[name].[chunkhash:8].css"
    }),

    new webpack.HashedModuleIdsPlugin(), // 实现持久化缓存
  ],
});
