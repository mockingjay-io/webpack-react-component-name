import WebpackReactComponentNamePlugin from '@mockingjay-io/webpack-react-component-name';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.plugins.push(new WebpackReactComponentNamePlugin());
    return config;
  },
};

export default nextConfig;
