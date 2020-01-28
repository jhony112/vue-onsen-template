/* eslint-disable no-console,no-unused-vars */
import Vue from 'vue'
import Vuex from 'vuex';
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import VueOnsen from 'vue-onsenui'; // This imports 'onsenui', so no need to import it separately
import storeLike from './store';
import mixin from './mixin';
import AppNavigator from './AppNavigator.vue';
import './assets/css/overide.css';
import './assets/css/util.css';

import './assets/css/grid.css';
import './assets/css/style.css';

import resize from 'vue-resize-directive'
import {ApiService} from './services/api.service'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

// JS import

//ApiService.init('http://wavenox.com:3000/api');


Vue.use(VueAwesomeSwiper);
Vue.use(Vuex);
Vue.use(VueOnsen); // VueOnsen set here as plugin to VUE. Done automatically if a call to window.Vue exists in the startup code.
Vue.config.productionTip = false;
window._ = require('underscore');
window.JQuery = window.$ = require('jquery')
export const bus = new Vue();
Vue.mixin(mixin);




new Vue({
  render: h => h(AppNavigator),
  directives: {
    resize
  },
  store: storeLike,
  beforeCreate() {

    this.$ons.disableAutoStyling();
    this.$ons.disableAutoStatusBarFill();
    this.$ons.disableIconAutoPrefix();
    this.$ons.forceUIWebViewScrollFix = true;
    let _self = this;
    // Shortcut for Material Design
    Vue.prototype.$isLiveApp = false;

    Vue.prototype.md = false;
    // Get the device pixel ratio


    // iPhone X Detection


    // Set iPhoneX flag based on URL
    if (window.location.search.match(/iphonex/i)) {
      document.documentElement.setAttribute('onsflag-iphonex-portrait', '');
      document.documentElement.setAttribute('onsflag-iphonex-landscape', '');

    }
    if (window.cordova) {
      document.addEventListener("deviceready", function () {
        console.log(device.cordova);

        Vue.prototype.$isLiveApp = true;
        Vue.prototype.$platform = device.platform.toUpperCase();

        if (device.platform.toUpperCase() === "IOS") {


          if (this.isPhoneX) {
            console.log('iphonex')
            StatusBar.overlaysWebView(true);
            // StatusBar.styleBlackOpaque();
          }
          else {
            StatusBar.overlaysWebView(true);
            StatusBar.styleBlackOpaque();
          }
          // StatusBar.backgroundColorByHexString("#000000");
        }

        app.changeStatusBarColorTo("#000");

      }, false);


    }
    else {
      this.$ons.ready(function () {
        console.log('not live');


      });
    }


  },

}).$mount('#app')

