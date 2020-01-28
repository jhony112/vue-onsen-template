export default {
  data() {
  return {
    handler: null,
    color: "",
  };
},
  mounted: function () {

  },
  methods: {
    alert(title, msg, callback) {
      this.$ons.notification.alert(msg, {title: title ? title : "Error"})
        .then((response) => {
          if (callback) {
            callback()
          }
          // Handle response.
        });
    },
    statusBar(color) {
      if (this.$isLiveApp) {

        console.log("live app so chnage statusbar")
        if (color === "default" ) {
          // StatusBar.overlaysWebView(false);
          StatusBar.styleBlackOpaque();
        }
        else{
          StatusBar.backgroundColorByHexString(color);
        }


      }
    },
    push(page, params = {}, anim = "slide-ios") {
      this.$store.commit('navigator/options', {
        // Sets animations
        animation: anim,
        // Resets default options
        callback: () => this.$store.commit('navigator/options', {})
      });
      if (params.statusBar && this.$isLiveApp) {
        this.statusBar(params.statusBar)
      }
      this.$store.commit('navigator/push', {
        extends: page,
        data() {
          return {
            toolbarInfo: {
              title: params.key ? params.key : ""
            }
          }
        }
      });
    },
    back(params = {}) {

      if (params.statusBar) {
        this.statusBar(params.statusBar)
      }
      // if (params.statusBar && this.$isLiveApp) {
      //     this.statusBar(params.statusBar)
      // }
      this.$store.commit("navigator/pop");

    },
    moneyFormat(m, dec = false) {
      if (dec) {
        return parseFloat(m).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
      }
      return parseFloat(m).toFixed(0).replace(/\d(?=(\d{3})+\.)/g, '$&,');

    },
    hideSplashScreen() {
      if (this.$isLiveApp) {
        navigator.splashscreen.hide();
      }
    },
    isPhoneX(){
      var ratio = window.devicePixelRatio || 1;

      // Define the users device screen dimensions
      var screen = {
        width : window.screen.width * ratio,
        height : window.screen.height * ratio
      };
      if ( screen.width === 1125 && screen.height === 2436) {
        return true;
        // StatusBar.styleBlackOpaque();
      }
      return false;
    }
  },

  beforeDestroy() {
  document.removeEventListener('keyup', this.handler);
}
}
