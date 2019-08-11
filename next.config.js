const withOffline = require('next-offline')
const withSass = require('@zeit/next-sass')
const withCSS = require('@zeit/next-css')
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
    conf.module.rules.push({
      test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000
        }
      }
    });
    return conf;
  },
}));
