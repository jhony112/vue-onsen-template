/* eslint-disable no-console,no-unused-vars */
import Vue from 'vue'
import Vuex from 'vuex';
// Webpack CSS import
import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import './assets/css/overide.css';
import './assets/css/util.css';
import './assets/fonts/fonts.css';
import './assets/css/grid.css';
import './assets/css/style.css';
import './assets/css/fonts.css';

import app from './app.js';
import resize from 'vue-resize-directive'
import {ApiService} from './services/api.service'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'

// JS import

//ApiService.init('https://harlem-girl.now.sh/');

import VueOnsen from 'vue-onsenui'; // This imports 'onsenui', so no need to import it separately
import storeLike from './store';
import AppNavigator from './AppNavigator.vue';

import TextareaAutosize from 'vue-textarea-autosize'

Vue.use(VueAwesomeSwiper);
Vue.use(TextareaAutosize);
Vue.use(Vuex);
Vue.use(VueOnsen); // VueOnsen set here as plugin to VUE. Done automatically if a call to window.Vue exists in the startup code.
Vue.config.productionTip = false;
window._ = require('underscore');
window.JQuery=window.$ = require('jquery')
Vue.mixin({
    data() {
        return {
            handler: null,
            color:"",
        };
    },
    mounted: function () {
        console.log(this.$el.id)


        let id = (this.$el.id);
        if (!id) return;
        let show = this.$options.show;


        let init = this.$options.init;



        console.log('created')
        // JQuery("input").first().focus();
        const component = this;
        this.handler = function (e) {
            console.log('keyup')
            if (e.which === 13) {
                console.log('enter');
                // JQuery("input").change(function() {
                //     var inputs = JQuery(this).closest('div').find(':input');
                //     inputs.eq( inputs.index(this)+ 1 ).focus();
                // });
                //  alert('enter fired');
                // run your code
            }
            component.$emit('keyup', e);
        }
        document.addEventListener('keyup', this.handler);
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
                if(color==="black" && this.color!=="black"){
                    this.color='black'
                    StatusBar.styleDefault();
                    StatusBar.backgroundColorByHexString("#ffffff");
                }
                if(color==="blue" && this.color!=="blue"){
                    this.color='blue'
                    StatusBar.styleBlackOpaque();
                    StatusBar.backgroundColorByHexString("#1e2976");
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
        back(params={}) {

            if (params.statusBar ) {
                this.statusBar(params.statusBar)
            }
            // if (params.statusBar && this.$isLiveApp) {
            //     this.statusBar(params.statusBar)
            // }
            this.$store.commit("navigator/pop");

        },
        moneyFormat(m,dec=false) {
            if(dec){
                return parseFloat(m).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
            }
            return parseFloat(m).toFixed(0).replace(/\d(?=(\d{3})+\.)/g, '$&,');

        },
        hideSplashScreen(){
            if(this.$isLiveApp){
                navigator.splashscreen.hide();
            }
        }
    },

    beforeDestroy() {
        document.removeEventListener('keyup', this.handler);
    }
})



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
        Vue.prototype.app_theme = {
            statusBar: "#3E1E68",
            background: "black",
            color: "white",
            backgroundColor: "black"
        };



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
                    StatusBar.overlaysWebView(false);

                   // StatusBar.styleBlackOpaque();
                    // app.changeStatusBarColorTo("#3E1E68");
                    //  StatusBar.styleDefault();
                }

               // app.changeStatusBarColorTo("#3E1E68");


                window.plugins.uniqueDeviceID.get(function (uuid) {
                        // got it!
                        console.log(uuid);
                        Vue.prototype.$uuid = uuid;
                        // alert(uuid);
                    },
                    function (err) {
                        // something went wrong
                        console.warn(err);
                    })



            }, false);


        }
        else {
            this.$ons.ready(function () {
                console.log('not live');
                // _self.$store.dispatch("app/init");

                //  _self.$store.dispatch("app/drop","user");
                // new db('user', {})
                //  app.start(device);
                //app.calculateViewPort();

            });
        }


    },

}).$mount('#app')

