module.exports = {
  entry: "./front_end/index.js",
  output: {
    path: __dirname + "/build",
    filename: "bundle.js",
    module: {
      loaders: [
        {
          test: /\.(js|jsx)$/,
          exclude: /(node_modules|bower_components)/,
          loader: "babel-loader",
          query: {
          }
        }
      ]
    }
  }
}
