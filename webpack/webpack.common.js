import HtmlWebpackPlugin from "html-webpack-plugin";
const path = require("path");

export const PATHS = {
  app: path.join(__dirname, "..", "app"),
  build: path.join(__dirname, "..", "build"),
};

 const commonConfig = {
  entry: {
    app: PATHS.app,
  },
  output: {
    path: PATHS.build,
    filename: "[name].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".jsx", ".json"],
    modules: [PATHS.app, "../node_modules"]
  },
};

export default commonConfig;
