import WebpackReactComponentNamePlugin from 'webpack-react-component-name';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.plugins.push(new WebpackReactComponentNamePlugin());
    return config;
  },
};

export default nextConfig;
