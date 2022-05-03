const path = require('path');

const webpack = require('webpack');

module.exports = {
  eslint: { enable: false },

  webpack: {
    alias: { '@': 'src/' },

    plugins: {
      add: [
        new webpack.EnvironmentPlugin({ NODE_ENV: process.env.NODE_ENV })
      ]
    },

    configure: (config, { paths }) => {
      config.output.path = path.resolve('docs');

      paths.appBuild = config.output.path;

      return config;
    }
  }
};
