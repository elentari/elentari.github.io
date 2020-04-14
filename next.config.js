const withPlugins = require('next-compose-plugins');
const withMDX = require('@next/mdx')();
const withTM = require('next-transpile-modules');

const nextConfig = {

};

module.exports = withPlugins(
  [
    [
      withMDX,
      {
        pageExtensions: ['js', 'jsx', 'md', 'mdx'],
      },
    ],
    [
      withTM,
      {
        transpileModules: ['three/examples/jsm/loaders/*'],
      },
    ],
  ],
  nextConfig
);
