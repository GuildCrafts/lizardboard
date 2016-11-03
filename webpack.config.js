module.exports = {
  entry: "./browser/index.js",
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
            presets: ['es-2015']
          }
        }
      ]
    }
  }
}
