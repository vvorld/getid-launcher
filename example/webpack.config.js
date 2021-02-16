const path = require('path');

module.exports = {
  entry: {
    sdkKey: './client-auth-by-sdk-key.js',
    jwt: './client-auth-by-jwt.js',
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/dist',
  },
  optimization: {
    minimize: false,
  },
};
