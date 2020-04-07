const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const { displayName, description } = require('./package.json');

const production = process.env.NODE_ENV === 'production';


module.exports = {
  port: 3000,

  siteName: displayName,
  siteDescription: description,

  configureWebpack: {
    plugins: [
      ...production ? [] : [ new HardSourceWebpackPlugin() ]
    ]
  }
};
