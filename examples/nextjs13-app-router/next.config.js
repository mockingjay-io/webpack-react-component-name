const WebpackReactComponentNamePlugin = require('webpack-react-component-name');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.plugins.push(new WebpackReactComponentNamePlugin());
    return config;
  },
}

module.exports = nextConfig
