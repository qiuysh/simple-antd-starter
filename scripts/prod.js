/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const os = require('os');

module.exports = {

  mode: 'production',

  entry: {
    app: [ path.join(__dirname, '../src/index') ],
  },

  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].[chunkhash:8].js',
    chunkFilename: "[id].chunk.[chunkhash:8].js",
  },

  optimization: {
    minimizer: [ // 用于配置 minimizers 和选项
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
        }
      }),
      new OptimizeCSSAssetsPlugin({})
    ]
  },

  plugins: [

    new webpack.HashedModuleIdsPlugin(),// 实现持久化缓存

    new webpack.DefinePlugin({
      __PRODUCTION: JSON.stringify(true),
    }),

    new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn/),

    new webpack.optimize.ModuleConcatenationPlugin(),

    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      options: {
        postcss: function () {
          return [
            autoprefixer({
              browsers: ['last 2 version']
            })
          ]
        }
      }
    }),

    new MiniCssExtractPlugin({
      filename: "[name].[hash:8].css",
      chunkFilename: "[name].[hash:8].css"
    }),


    new HtmlWebpackPlugin({
      title: 'react_System',
      filename: 'index.html',
      template: path.join(__dirname, '..', 'src', 'template.ejs'),
      favicon: path.join(__dirname, '..', 'src', 'assets', 'images', 'favicon.ico')
    })
  ],

  module: {
    rules: [
      {
        test: /\.ts[x]?$/,
        exclude: /node_modules/,
        include: path.resolve('src'),
        use: [
          "babel-loader",
          {
            loader: 'awesome-typescript-loader',
            options: {
              cacheDirectory: true,
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)(\?[tv]=[\d.]+)*$/,
        exclude: /node_modules/,
        use: ['file-loader?name=assets/images/[name].[ext]']
      },
      {
        test: /\.(svg|woff|woff2|ttf|eot)(\?[tv]=[\d.]+)*$/,
        exclude: /node_modules/,
        use: ['file-loader?name=assets/fonts/[name].[ext]']
      },
      {
        test: /\.html$/,
        use: ['raw-loader']
      },
      {
        test: /\.ejs$/,
        use: ['ejs-loader']
      },
      {
        test: /\.json$/,
        use: ['json-loader']
      }
    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    }
  }
};