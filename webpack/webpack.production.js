import commonConfig from './webpack.common.js'
import ExtractTextPlugin from "extract-text-webpack-plugin";

const extractSass = new ExtractTextPlugin({
  filename: "[name].[contenthash].css",
  disable: process.env.NODE_ENV === "development"
});

const config = {
  module: {
    rules: [
      {
        test: /\.s(a|c)ss$/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: "css-loader"
          }, 
          {
            loader: "sass-loader"
          }],
          fallback: "style-loader"
        })
      }
    ]
  },
  plugins: [
    extractSass
  ]
};

export default  Object.assign({}, commonConfig, config);
