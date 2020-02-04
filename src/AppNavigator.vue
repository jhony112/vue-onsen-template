<template>
    <v-ons-navigator
            swipeable
            swipe-target-width="50px"
            :page-stack="pageStack"
            :pop-page="storePop"
            :options="options"
            @postpush="showPopTip"
            :class="{ 'border-radius': borderRadius }"
    ></v-ons-navigator>
</template>

<script>
  import AppSplitter from './AppSplitter.vue';
  import navigator from './store/modules/navigator';
  // import TransactionTab from "./pages/tabs/NearbyTab.vue";


  export default {
    beforeCreate() {
      this.$store.commit('navigator/push', AppSplitter);
      // this.statusBar('blue');
//             this.$store.dispatch("app/getUser").then(response => {
//                 // console.log("Got some data, now lets show something in this component")
//                 this.$store.commit("navigator/push", AppSpliter);
//                 return this.hideSplashScreen();
//
//             }, error => {
//                 this.$store.commit("navigator/push", AppSpliter);
//                // this.$store.commit("navigator/push", onboardingContainer);
//                 return this.hideSplashScreen();
//                 // console.error(error)
// //                return this.$store.commit('navigator/push', onboardingContainer);
//
//             })
      //   this.$store.dispatch("app/getUser");
      //   let str = this.$store.getters["app/isLoggedIn"];
      //   if(str){
      //    return   this.$store.commit("navigator/push", AppTabbar);
      //   }
      //
      //   // this.$store.dispatch("app/getUser");
      //   // let user = (this.$store.state.app.data.user);
      //   // console.log(user);
      //   // if (user) {
      //   //     alert(user.first_name);
      //   // }
      //   // console.log(users);
      //   //this.$store.commit("navigator/reset", HomePage);
      //   // this.$store.commit("navigator/push", AppTabbar);

      // db.getUser(function (user) {
      //
      //     if (user) {
      //         console.log(user);
      //         _self.$store.commit("navigator/push", AppTabbar);
      //     }
      //     else {
      //         _self.$store.commit('navigator/push', onboardingContainer);
      //     }
      // })

    },
    data() {
      return {
        shutUp: true
      };
    },
    computed: {
      pageStack() {
        return this.$store.state.navigator.stack;
      },
      options() {
        return this.$store.state.navigator.options;
      },
      borderRadius() {
        return new URL(window.location).searchParams.get('borderradius') !== null;
      }
    },
    mounted() {
      if (this.$isLiveApp) navigator.splashscreen.hide();
    }
    ,
    methods: {
      storePop() {
        this.$store.commit('navigator/pop');
      }
      ,
      showPopTip() {
        !this.shutUp &&
        this.$ons.notification
          .toast({
            message: 'Try swipe-to-pop from left side!',
            buttonLabel: 'Shut up!',
            timeout: 2000
          })
          .then(i => (this.shutUp = i === 0));
      }
    }
  }
  ;
</script>

<style>


</style>
