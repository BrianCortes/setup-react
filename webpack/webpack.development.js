import commonConfig from './webpack.common.js'

const config = {
  devServer: {
    watchOptions: {
      // Delay the rebuild after the first change
      aggregateTimeout: 300,

      // Poll using interval (in ms, accepts boolean too)
      poll: 1000,
    },
    // Display only errors to reduce the amount of output.
    overlay: true,
    host: process.env.HOST, // Defaults to `localhost`
    port: process.env.PORT, // Defaults to 8080
  },
};

export default Object.assign({}, commonConfig, config);
