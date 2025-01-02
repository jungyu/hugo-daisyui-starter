const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const { SourceMapDevToolPlugin } = require("webpack");
const TerserPlugin = require('terser-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    app: path.resolve(__dirname, 'assets/js/app.js')
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'static/'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          outputPath: 'static/images/'
        }
      },
      {
        test: /\.(ttf|eot|svg|gif|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{
          loader: 'file-loader',
        }]
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css']
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new SourceMapDevToolPlugin({
      filename: "[file].map"
    })
  ],
  optimization: {
    minimize: true, // 開啟壓縮
    minimizer: [
      new TerserPlugin(),
      new CssMinimizerPlugin()
    ]
  },
  externals: {
    // 將 jQuery 排除在 Webpack 的轉換之外
    jquery: 'jQuery',
  },
};