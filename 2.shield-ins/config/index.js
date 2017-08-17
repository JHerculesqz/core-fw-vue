// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
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
  },
  dev: {
    env: require('./dev.env'),
    port: 8082,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/login': {
        target: 'http://localhost',
        changeOrigin: true,
        pathRewrite: {
          '^/login': '/login'
        }
      },
      '/isLogin': {
        target: 'http://localhost',
        changeOrigin: true,
        pathRewrite: {
          '^/isLogin': '/isLogin'
        }
      },
      '/logout': {
        target: 'http://localhost',
        changeOrigin: true,
        pathRewrite: {
          '^/logout': '/logout'
        }
      },
      '/getLoginUser': {
        target: 'http://localhost',
        changeOrigin: true,
        pathRewrite: {
          '^/getLoginUser': '/getLoginUser'
        }
      },
      '/addUser': {
        target: 'http://localhost',
        changeOrigin: true,
        pathRewrite: {
          '^/addUser': '/addUser'
        }
      },
      '/getUserLst': {
        target: 'http://localhost',
        changeOrigin: true,
        pathRewrite: {
          '^/getUserLst': '/getUserLst'
        }
      },
      '/delUser': {
        target: 'http://localhost',
        changeOrigin: true,
        pathRewrite: {
          '^/delUser': '/delUser'
        }
      },
      '/initDevByDevId': {
        target: 'http://localhost',
        changeOrigin: true,
        pathRewrite: {
          '^/initDevByDevId': '/initDevByDevId'
        }
      },
      '/getCompanyInfo': {
        target: 'http://localhost',
        changeOrigin: true,
        pathRewrite: {
          '^/getCompanyInfo': '/getCompanyInfo'
        }
      },
      '/getDevLstByEnable': {
        target: 'http://localhost',
        changeOrigin: true,
        pathRewrite: {
          '^/getDevLstByEnable': '/getDevLstByEnable'
        }
      },
      '/getDevLstByDisable': {
        target: 'http://localhost',
        changeOrigin: true,
        pathRewrite: {
          '^/getDevLstByDisable': '/getDevLstByDisable'
        }
      },
      '/devEnable': {
        target: 'http://localhost',
        changeOrigin: true,
        pathRewrite: {
          '^/devEnable': '/devEnable'
        }
      },
      '/getBasicInfoByDevId': {
        target: 'http://localhost',
        changeOrigin: true,
        pathRewrite: {
          '^/getBasicInfoByDevId': '/getBasicInfoByDevId'
        }
      },
      '/getWarnLstByDevId': {
        target: 'http://localhost',
        changeOrigin: true,
        pathRewrite: {
          '^/getWarnLstByDevId': '/getWarnLstByDevId'
        }
      },
      '/getUsageByClientNoAndStartTimeAndEndTime': {
        target: 'http://localhost',
        changeOrigin: true,
        pathRewrite: {
          '^/getUsageByClientNoAndStartTimeAndEndTime': '/getUsageByClientNoAndStartTimeAndEndTime'
        }
      }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
