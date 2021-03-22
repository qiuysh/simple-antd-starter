const merge = require("webpack-merge").merge;
const base = require("./base.js");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const os = require("os");

module.exports = merge(base, {
  mode: "production",
  optimization: {
    minimizer: [
      // 用于配置 minimizers 和选项
      new UglifyJsPlugin({
        cache: true,
        parallel: os.cpus().length - 1,
        sourceMap: false, // set to true if you want JS source maps
        uglifyOptions: {
          drop_console: true,
          drop_debugger: true,
          warnings: false,
          parse: {},
          compress: {},
          mangle: true, // Note `mangle.properties` is `false` by default.
          output: null,
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_fnames: false,
        },
      }),

      new OptimizeCSSAssetsPlugin({}),
    ],
    splitChunks: {
      minSize: {
        javascript: 30000, // 模块要大于30kb才会进行提取
        style: 50000, // 模块要大于50kb才会进行提取
      },
      maxSize:  {
        javascript: 3000000, //故意写小的效果更明显
        style: 50000,
      },
      chunks: "all",
      minChunks: 1,
      minRemainingSize: 0, 
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      name: false,
      cacheGroups: {
        vendor: {
          name: "vendors",
          test: "vendors",
          priority: -1,
        },
      },
    },
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "assets/styles/[name]_[chunkhash:8].css",
    }),

    // new webpack.HashedModuleIdsPlugin(), // 实现持久化缓存
  ],
});
