var path = require('path');

module.exports = {
  entry: {
    'lib/deepify': './src/index.js',
    'tests-output/deepifySet': './tests/deepifySet.spec.js',
    'tests-output/set.helpers': './tests/set.helpers.spec.js',
    'tests-output/deepifyGet': './tests/deepifyGet.spec.js'
  },
  output: {
    path: path.join(__dirname, ""),
		filename: "[name].js",
    libraryTarget:'umd',
    globalObject: 'typeof self !== \'undefined\' ? self : this'
  },
  devtool: 'inline-source-map',
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
