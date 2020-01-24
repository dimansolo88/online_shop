const webpack = require('webpack')
const path = require('path')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const appRoot = require('app-root-path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { MiniCssExtractPlugin } = require('mini-css-extract-plugin')

const cssLoaders = property => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        reloadAll: true,
      },
    },
    'css-loader',
  ]

  if (property) {
    loaders.push(property)
  }

  return loaders
}

module.exports = {
  entry: [path.join(appRoot.path, 'src/index.js')],

  output: {
    path: path.resolve(appRoot.path, 'dist'),
    filename: '[name].[hash].js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: cssLoaders(),
      },
      {
        test: /\.s[ac]ss$/,
        use: cssLoaders('sass-loader')
      },
      {
        test: /^(?!.*\.inline\.svg$).*\.svg$/,
        loader: 'svg-url-loader',
        options: {
          limit: 10000,
          name: '[path][name].[ext]',
        },
      },
      {
        test: /\.inline.svg$/,
        loader: 'react-svg-loader',
        options: {
          jsx: true,
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new LodashModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(appRoot.path, 'public', 'index.html'),
    }),
    new webpack.DefinePlugin({
      'process.env.REACT_APP_TARGET': JSON.stringify(
        process.env.REACT_APP_TARGET,
      ),
    }),
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
}
