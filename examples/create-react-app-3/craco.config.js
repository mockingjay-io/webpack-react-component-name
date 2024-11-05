const WebpackReactComponentNamePlugin = require("@mockingjay-io/webpack-react-component-name");

module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      webpackConfig.plugins = webpackConfig.plugins || [];
      webpackConfig.plugins.push(
        new WebpackReactComponentNamePlugin({
          parseDependencies: true,
        })
      );
      return webpackConfig;
    },
  },
};
