var path = require('path');

module.exports = {
  entry: {
    'lib/deepify': './src/index.js',
    'tests-output/index': './tests/index.spec.js',
    'tests-output/helpers': './tests/helpers.spec.js'
  },
  output: {
    path: path.join(__dirname, ""),
		filename: "[name].js"
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
};
