const withOffline = require('next-offline')
const withSass = require('@zeit/next-sass')
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = withOffline(withSass({
  webpack: (config) => {
    const conf = config;
    conf.plugins.push(
      new CopyWebpackPlugin([
        {
          from: 'static',
        },
      ]),
    );
    return conf;
  },
}));
