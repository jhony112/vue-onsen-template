<template>
    <ons-page id="HistoryTab">

        <div class="page__background" style="background: #f5f4f4"></div>
        <div class="page__content ">
            <section class="padded">
                <reward-card></reward-card>
                <reward-card :max_punch="6" :punch="2"></reward-card>
            </section>


        </div>

    </ons-page>
</template>

<script>


    import resize from 'vue-resize-directive'
    import RewardCard from "../../components/rewardCard";


    export default {
        components: {RewardCard},
        directives: {
            resize,
        },
        beforeCreate() {
            // this.$store.commit('navigator/options', {
            //     // Sets animations
            //     animation: "lift-ios",
            //     // Resets default options
            //     callback: () => this.$store.commit('navigator/options', {})
            // });
        },

        data() {
            return {
                query: "",

            };
        },
        computed: {
            getAmount() {
                return (this.amount);
            }
        },
        methods: {},
        mounted: function () {
            // alert('i am mounted')
        },
        page: "HistoryTab",
        show: function () {
            // console.warn('show works')
        },

    };
</script>

<style scoped>
    .card {
        margin: 0px;
    }

    .page__content {
        background: #EEEEEE !important;
    }

    .toolbar {
        background: #ffffff !important;
        color: #000000;
    }

    .section {
        /*background: #eaeaea;*/
        /*padding: 10px 1px;*/
    }

</style>
