module.exports = {
  productionSourceMap: false,
  publicPath: '',
  pluginOptions: {
    cordovaPath: 'src-cordova'
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/assets/scss/_variables.scss";`
      }
    }
  }
}

