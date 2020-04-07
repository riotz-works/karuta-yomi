const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { displayName, description, name } = require('./package.json');

const production = process.env.NODE_ENV === 'production';


module.exports = {
  port: 3000,

  siteName: displayName,
  siteDescription: description,
  siteUrl: `https://riotz.works/${name}`,

  plugins: [
    { use: '@gridsome/plugin-google-analytics', options: { id: 'UA-109297390-1' }},
    { use: '@gridsome/plugin-sitemap' },
    { use: 'gridsome-plugin-typescript' }
  ],

  configureWebpack: {
    plugins: [
      ...production ? [] : [ new HardSourceWebpackPlugin() ]
    ],
    optimization: {
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: production
            }
          }
        })
      ]
    }
  }
};
