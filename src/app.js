
export default {
    isLiveApp: false,
    platform: "web",
    start: function (device) {

        if (this.isLiveApp) {
            this.setupKeyboard();
            this.platform = device.platform.toUpperCase();
            document.addEventListener("backbutton", this.backButtonHandler, false);
            if (this.$platform === "IOS") {
                console.log(this.$platform);
                StatusBar.overlaysWebView(true);
            }
        }
    },

    backButtonHandler: function () {

    },
    setupKeyboard: function () {
        if (this.$isLiveApp) {
            // cordova.plugins.Keyboard.shrinkView(true);
            cordova.plugins.Keyboard.automaticScrollToTopOnHiding = true;
        }

    },
    setupDatabase:function(){

    },

    changeStatusBarColorTo: function (color) {

            if (color) {
                if (color === "black") {
                    StatusBar.styleBlackOpaque();
                }
                else if (color === "white") {
                    StatusBar.styleDefault();
                }
                else {
                    StatusBar.backgroundColorByHexString(color);
                }

            }
            else {
                StatusBar.styleDefault();
            }

    }
}


