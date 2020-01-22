module.exports = {
    productionSourceMap: false,
    devServer: {
        proxy: 'https://harlem-girl.now.sh/',
    },
    publicPath: '',
    pluginOptions: {
        cordovaPath: 'src-cordova'
    }
}
