const path = require('path');

module.exports = {
  mode: 'development', // or 'production' depending on your needs
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  devServer: {
    static: './dist',
    open: true,
    compress: true,
    port: 9000,
  },
};
