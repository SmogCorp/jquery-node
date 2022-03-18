const path = require('path');
module.exports = {
  entry: './src/jquery-node.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'jquery-node.min.js',
    library: 'jquery-node' // to enable as object in window
  },
  mode: 'production',
  externals: {
    jquery: 'jQuery'
    // add external dependencies here
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: '/node_modules/',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
};