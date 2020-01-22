<template>
  <v-ons-page>
    <v-ons-splitter>
      <v-ons-splitter-side
        swipeable
        swipe-target-width="20px"
        side="left"
        collapse
        width="260px"
        animation="reveal"
        :open.sync="isOpen"
      >
        <menu-page></menu-page>
      </v-ons-splitter-side>

      <v-ons-splitter-content>
        <app-tabbar @openMenu="test" ></app-tabbar>
      </v-ons-splitter-content>
    </v-ons-splitter>
  </v-ons-page>
</template>

<script>
import AppTabbar from "./AppTabbar.vue";
import MenuPage from "./pages/Menu.vue";

export default {
    methods:{
        test(newValue){
            this.$store.commit("splitter/toggle", newValue);
        }
    },
  computed: {
    isOpen: {
      get() {
        return this.$store.state.splitter.open;
      },
      set(newValue) {
        this.$store.commit("splitter/toggle", newValue);
      }
    }
  },
  components: { AppTabbar, MenuPage }
};
</script>

<style>

ons-splitter-side[animation="overlay"] {
  border-left: 1px solid #bbb;
}
</style>
