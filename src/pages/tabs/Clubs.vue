<template>
    <ons-page id="cashTab">
        <div class="page__background" style="background: #efeeee"></div>
        <div class="page__content ">

        </div>

    </ons-page>
</template>

<script>


    import resize from 'vue-resize-directive'
    import profilePage from '../profile/profilePage.vue'


    export default {
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
        components: {},
        data() {
            return {
                query: "",
                amount: 6000,

            };
        },
        computed: {
            getAmount() {
                return (this.amount);
            }
        },
        methods: {
            goProfile() {
                this.push(profilePage, {statusBar: "black"});
            }
        },
        mounted: function () {
            // alert('i am mounted')
        },
        page: "cashTab",
        show: function () {
            // console.warn('show works')
        },

    };
</script>

<style scoped>
    .card {
        margin: 0px;
    }

    .section {
        /*background: #eaeaea;*/
        /*padding: 10px 1px;*/
    }

    .page__content {
        background: #ffffff !important;
    }

    .toolbar {
        background: white !important;
        color: #000000;
    }

    .amount-area {
        height: 25%;
        width: 100%;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #ffffff;
        color: #000000;
    }

    .amount-area .amount {
        color: #000000;
        position: relative;
        font-weight: 700;
        font-size: 4em;
    }



    .siguel {
        position: absolute;
        top: 25px;
        letter-spacing: .5px;
        left: -35px;
        font-size: 0.2em;
        font-weight: 800;
    }
    .toolbar {
        background: #ffffff !important;
        color: #000000;
    }

</style>
