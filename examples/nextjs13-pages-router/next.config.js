const WebpackReactComponentNamePlugin = require('@mockingjay-io/webpack-react-component-name');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(new WebpackReactComponentNamePlugin());
    return config;
  },
}

module.exports = nextConfig
