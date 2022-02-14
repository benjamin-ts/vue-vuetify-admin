
const path = require('path')

function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = 'vue vuetify Admin' // page title
const port = process.env.port || process.env.npm_config_port || 8085 // dev port
module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  publicPath: '/',
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    before: require('./mock/mock-server.js')
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  },
}
