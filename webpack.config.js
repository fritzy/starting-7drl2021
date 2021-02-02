const path = require('path');

module.exports = {
  entry: './index.js',
  devtool: 'source-map',
  mode: 'development',
  module: {
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'out.js'
  },
  plugins: [
  ]
};
