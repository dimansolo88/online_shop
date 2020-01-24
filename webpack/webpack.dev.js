const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
  mode: 'development',
  devServer: {
    port: process.env.PORT || 4200,
    contentBase: path.join(__dirname, 'dist'),
    hot: true,
    // open: true,
    historyApiFallback: true,
    overlay: true,
    stats: 'minimal',
  },
});
