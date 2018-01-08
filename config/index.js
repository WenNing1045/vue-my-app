'use strict'
// Template version: 1.2.8
// see http://vuejs-templates.github.io/webpack for documentation.

const path = require('path')

module.exports = {
  dev: {

    // Paths
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      //获取首页数据
      //匹配所有以api开头的请求路径
      '/api':{
        target:'https://mallcdn.api.epet.com/v3/index/main.html?pet_type=dog&version=358',
        changeOrigin:true,//支持跨域
        pathRewrite:{
          '^/api':''   //重新写以api开头的路径（去掉/api）
        }
      },
      //获取首页商品数据
      '/test':{
        target:'https://mall.api.epet.com/v3/index/main.html?do=GetDynamicV315&pet_type=dog',
        changeOrigin:true,
        pathRewrite:{
          '^/test':''
        }
      },
      //获取分类页选项数据
      '/item':{
        target: 'https://mallcdn.api.epet.com/v3/goods/category/main.html?pet_type=dog&system=wap&isWeb=1&version=303',
        changeOrigin:true,
        pathRewrite:{
          '^/item':''
        }
      },
      //获取分类页指定选项的数据
      '/get':{
        target: 'https://mallcdn.api.epet.com/v3/goods/category/main.html',
        changeOrigin:true,
        pathRewrite:{
          '^/get':''
        }
      },
      //获取分类页品牌数据
      '/brand':{
        target: 'https://mallcdn.api.epet.com/v3/brand/list/main.html?pet_type=dog&system=wap&isWeb=1&version=303',
        changeOrigin:true,
        pathRewrite:{
          '^/brand':''
        }
      },
    },

    // Various Dev Server settings
    host: 'localhost', // can be overwritten by process.env.HOST
    port: 8080, // can be overwritten by process.env.PORT, if port is in use, a free one will be determined
    autoOpenBrowser: false,
    errorOverlay: true,
    notifyOnErrors: true,
    poll: false, // https://webpack.js.org/configuration/dev-server/#devserver-watchoptions-


    /**
     * Source Maps
     */

    // https://webpack.js.org/configuration/devtool/#development
    devtool: 'cheap-module-eval-source-map',

    // If you have problems debugging vue-files in devtools,
    // set this to false - it *may* help
    // https://vue-loader.vuejs.org/en/options.html#cachebusting
    cacheBusting: true,

    cssSourceMap: true,
  },

  build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html'),

    // Paths
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',

    /**
     * Source Maps
     */

    productionSourceMap: true,
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map',

    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],

    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  }
}
