const path = require("path")

var config = {
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },
  mode: "production",
}

var HostConfig = Object.assign({}, config, {
  entry: path.resolve(__dirname, "src/ds-iframe-widget.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "ds-iframe-widget.js",
    library: "DsIframeWidget",
  },
});

var clientConfig = Object.assign({}, config, {
  entry: path.resolve(__dirname, "src/ds-iframe-widget-content.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "ds-iframe-widget-content.js",
    libraryTarget: 'umd',
    // library: "iframeResizerContentWindow",
  },
});


module.exports = [clientConfig, HostConfig]