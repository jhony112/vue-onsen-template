<template>
    <ons-page id="TransactionTab">

        <div class="page__background" style="background: #efefef"></div>
        <div class="page__content flex flex-sb flex-col ">
            <div class="rewardsContainer w-full">
                <nearby-card @click="loadNearby">></nearby-card>

                <nearby-card></nearby-card>
                <div class="likesContainer">
                    <div class="m-b-10 ">Let us know what you like</div>
                    <swiper ref="swiper" :options="swiperOptions">

                        <swiper-slide :key="index" v-for="(cat,index) in categories">
                            <div class="likes">
                                <img :src="getImg(cat.name)" alt="">
                                <div class="likes__overlay"></div>
                                <div class=" text-sm text-up text-left"> {{cat.name}}</div>
                                <div class="likes__cta">
                                    <div class="likes__cta--like">
                                        <i class="fa fa-check-circle fa-2x text-white"></i>
                                    </div>
                                    <div class="likes__cta--dislike">
                                        <i class="fa fa-times fa-2x text-white"></i>
                                    </div>
                                </div>
                            </div>
                        </swiper-slide>


                    </swiper>


                </div>
              <nearby-card></nearby-card>
            </div>

        </div>

    </ons-page>
</template>

<script>


    import resize from 'vue-resize-directive'
    import nearbyDetail from '../nearby/nearbyDetail'
    import NearbyCard from "../../components/nearbyCard";

    export default {
        statusBar: "#00a13a",
        directives: {
            resize,
        },
        components: {NearbyCard},
        beforeCreate() {

            // if (this.$isLiveApp) {
            //     StatusBar.styleBlackOpaque();
            //     StatusBar.backgroundColorByHexString("#00a13a");
            // }

            // this.$store.commit('navigator/options', {
            //     // Sets animations
            //     animation: "lift-ios",
            //     // Resets default options
            //     callback: () => this.$store.commit('navigator/options', {})
            // });
        },


        data() {
            return {
                amount: "0",
                bg_primary: "#00a13a",
                swiperOptions: {
                    slidesPerView: 'auto',
                    spaceBetween: 10,

                    // Any other options that can be got from plugin documentation
                },
                categories: [

                    {
                        id: 1,
                        name: "Retail"
                    },
                    {
                        id: 2,
                        name: "Beauty"
                    },
                    {
                        id: 3,
                        name: " Film"
                    },
                    {
                        id: 4,
                        name: "Concerts / Events"
                    },
                    {
                        id: 5,
                        name: "Food"
                    },
                    {
                        id: 6,
                        name: "Drinks"
                    },
                    {
                        id: 7,
                        name: "Music"
                    },
                    {
                        id: 8,
                        name: "Kids"
                    },
                    {
                        id: 9,
                        name: "Religion"
                    },
                    {
                        id: 10,
                        name: "Art"
                    },
                    {
                        id: 11,
                        name: " Nightlife"
                    },
                    {
                        id: 11,
                        name: "Hotels"
                    },
                    {
                        id: 12,
                        name: "Leisure"
                    },
                    {
                        id: 13,
                        name: "Sports"
                    },
                    {
                        id: 14,
                        name: "Fitness"
                    },
                    {
                        id: 15,
                        name: "Transportation"
                    },
                    {
                        id: 16,
                        name: "Services"
                    }

                ]

            };
        },
        computed: {
            getAmount() {
                return (this.amount);
            },

        },
        methods: {
            loadNearby() {
                this.push(nearbyDetail)
            },
            getImg(tag) {
                return `https://source.unsplash.com/500x500?fun,${tag}`
            }
        },
        mounted: function () {
            // alert('i am mounted')
        },


    };
</script>

<style scoped>

    .rewardsContainer, .likesContainer {
        width: 100%;
        padding: 10px 8px;
    }

    .likes {
        width: 320px;
        height: 150px;
        position: relative;

    }

    /* the parent */

    .likes img {
        border-radius: 8px;
        width: 100%;
        height: 80%;
        object-fit: cover;
    }

    .likes__overlay {
        position: absolute;
        width: 100%;
        height: 80%;

        border-radius: 8px;
        z-index: 2;
        /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#000000+0,000000+100&0+0,0.65+100 */
        background: -moz-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 100%); /* FF3.6-15 */
        background: -webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 100%); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.65) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#a6000000', GradientType=0); /* IE6-9 */

        top: 0;
    }

    .likes__cta {
        position: absolute;
        width: 90%;
        height: 80%;
        z-index: 3;
        display: flex;
        box-sizing: border-box;
        justify-content: space-between;
        top: 3.5em;
        left: 0;
        right: 0;
        margin: auto;
    }

</style>
