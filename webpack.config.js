const path = require('path'); // CommonJS

module.exports = {
  mode: 'production',
  entry: './frontend/Painel.js',
  output: {
    path: path.resolve(__dirname, 'src', 'public', 'assets', 'js'),
    filename: 'bundle.painel.js'
  },
  module: {
    rules: [{
      exclude: /node_modules/,
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/env']
        }
      }
    }]
  },
  devtool: 'source-map'
};
