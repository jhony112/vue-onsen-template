<template>
    <v-ons-page :style="swipePosition">
        <ons-toolbar>
            <div class="left" @click="openMenu">
                <i class="fa fa-bars fa-2x "></i>
            </div>

            <div class="center">
                <div class="text-bold text-white"> {{title}}</div>

            </div>


        </ons-toolbar>

        <v-ons-tabbar position="bottom"
                      :swipeable="false"
                      :modifier="md ? 'autogrow white-content' : ''"
                      :on-swipe="onSwipe "
                      :tabbar-style="swipeTheme"
                      :tabs="tabs"
                      :index.sync="index"
                      @postchange="showTip($event, 'Tip: Try swiping pages!')"
        ></v-ons-tabbar>
    </v-ons-page>
</template>

<script>
    /* eslint-disable no-undef,no-console */

    import Camera from './pages/Camera';
    import Buttons from './pages/Buttons';
    import Carousel from './pages/Carousel';


    // Just a linear interpolation formula
    const lerp = (x0, x1, t) => parseInt((1 - t) * x0 + t * x1, 10);
    // RGB colors
    const red = [244, 67, 54];
    const blue = [30, 136, 229];


    export default {

        data() {
            return {
                shutUp: !this.md,
                showingTip: false,
                colors: red,
                showMenu: false,
                animationOptions: {},
                topPosition: 0,
                tabs: [
                    {
                        label: "Camera",

                        icon: 'fa-photo',
                        page: Camera,
                        theme: red,


                    },
                    {
                        label: 'Buttons',
                        active: true,
                        icon: 'fa-send',
                        page: Buttons,
                        theme: red
                    },
                    {
                        label: 'Carosel',
                        icon: 'fa-user',
                        page: Carousel,
                        theme: blue
                    },


                ]
            };
        },

        methods: {
            openMenu() {
                this.$emit("openMenu", !this.showMenu)
            },
            onSwipe(index, animationOptions) {
                // Apply the same transition as ons-tabbar
                this.animationOptions = animationOptions;

                // Interpolate colors and top position
                const a = Math.floor(index), b = Math.ceil(index), ratio = index % 1;
                this.colors = this.colors.map((c, i) => lerp(this.tabs[a].theme[i], this.tabs[b].theme[i], ratio));
                this.topPosition = lerp(this.tabs[a].top || 0, this.tabs[b].top || 0, ratio);
                console.log(parseInt(index));
                this.handleIndicators(parseInt(index));
            },
            handleIndicators(index) {

                if (index === 1) {
                    JQuery('.tabbar').addClass('color');
                   // this.statusBar("green")
                }
                else {
                    JQuery('.tabbar').removeClass('color');
                   // this.statusBar("black")
                }

            },
            showTip(e, message) {
                if (!this.shutUp && !(e && e.swipe) && !this.showingTip) {
                    this.showingTip = true;
                    this.$ons.notification.toast({
                        message,
                        buttonLabel: 'Shut up!',
                        timeout: 2000
                    }).then(i => {
                        this.shutUp = i === 0;
                        this.showingTip = false;
                    });
                }
            }
        },

        computed: {
            index: {
                get() {
                    return this.$store.state.tabbar.index;
                },
                set(newValue) {
                    this.$store.commit('tabbar/set', newValue)
                }
            },
            title() {
                return this.tabs[this.index].title || this.tabs[this.index].label || "Near You";
            },
            swipeTheme() {
                return this.md && {
                    backgroundColor: `rgb(${this.colors.join(',')})`,
                    transition: `all ${this.animationOptions.duration || 0}s ${this.animationOptions.timing || ''}`
                }
            },
            swipePosition() {
                return this.md && {
                    top: this.topPosition + 'px',
                    transition: `all ${this.animationOptions.duration || 0}s ${this.animationOptions.timing || ''}`
                }
            }
        }
    };
</script>

<style>
    /* Custom 'white-content' modifier */

    /*.tabbar {*/
    /*padding-bottom: 0;*/
    /*background: #00a13a;*/
    /*height: 52px;*/
    /*}*/
    :checked + .tabbar__button {
        color: #1e2976 !important;
    }

    .tabbar.color {
        background: white;
        color: grey;
    }

    .tabbar.color .raba {
        color: #1e2976 !important;
    }

    .tabbar__button {
        color: rgba(37, 36, 36, 0.65) !important;
        height: 56px !important;
        line-height: 56px !important;
    }

    .tabbar {
        height: 60px !important;
    }

    .tabbar__content {
        bottom: 60px !important;
    }

    .klubb-klubb_plain {
        font-size: 1.9em;
        position: absolute;
        right: 0;
        left: 0;
        z-index: 1000;
        top: 14px;
    }


</style>
