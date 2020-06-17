/* eslint-disable no-process-env */                 // 'cuz configuration file and requires environment variables
/* eslint-disable @typescript-eslint/camelcase */   // 'cuz key name of configuration is specified
const Fiber = require('fibers');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
const { appHost, displayName, description, name } = require('./package.json');

const production = process.env.NODE_ENV === 'production';


module.exports = {
  port: 3000,

  siteName: displayName,
  siteDescription: description,
  siteUrl: `${appHost}/${name}`,
  pathPrefix: `/${name}`,
  icon: 'src/assets/app-icon.png',

  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "~/assets/style/variables.scss"',
        sassOptions: {
          fiber: Fiber
        }
      }
    }
  },

  plugins: [
    { use: '@gridsome/plugin-google-analytics', options: { id: 'UA-109297390-1' }},
    { use: '@gridsome/plugin-sitemap' },
    { use: 'gridsome-plugin-typescript' },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Game',
        path: 'src/data/games/*.json'
      }
    }
  ],

  templates: {
    Game: '/stages/:fileInfo__name'
  },

  configureWebpack: {
    module: {
      rules: [
        { test: /\.(?:js|ts|vue)$/u, loader: 'eslint-loader' }
      ]
    },
    plugins: [
      new VuetifyLoaderPlugin(),
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
