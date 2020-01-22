<template>
    <ons-page id="confirmationUI">
        <!--<Loader  message="Please Wait"></Loader>-->
        <v-ons-toolbar>
            <div class="left">
                <div class="text-bold text-lg">Confirmation</div>
            </div>
            <div class="center ">
                <div class="text-bold "></div>
            </div>
            <div class="right " @click="back(back_config)">
                <i class="ion-ios-close-circle  fa-2x m-r-10"></i>
            </div>
        </v-ons-toolbar>

        <div class="page__background" style="background: white"></div>
        <div class="content" style="background: white" id="content">
            <div class="m-t-50 w-90 m-l-r-auto pos-relative h-full">
                <img src="https://source.unsplash.com/random/300x300"/>
                <div class=" text-lg m-t-10">Sending to <b>@jhony112</b></div>
                <div class="text-xxl text-bolder "><span class="text-xs">NGN</span>1000.00</div>
                <div class="narration m-t-10 m-b-10 text-italics">
                    lorem ipsum dooe rhjrje
                </div>
                <div class=" text-lg text-grey m-t-10">Fees: <b>0.00</b></div>
                <div class=" text-lg text-grey m-t-5">Available : <b>Instantly</b></div>
                <div class="btn btn-block btn-round btn-lighter text-caps text-bold text-white "
                     style="position: absolute;width: 100%;bottom: 15%;">Send Money <i
                        class="ion-cont"></i></div>
            </div>

        </div>


    </ons-page>
</template>

<script>
    import Loader from '../../components/Loader';

    export default {
        name: "confirmation",
        components: {Loader},
        data(){
            return{
                back_config:{statusBar:"green"},
            }
        }
    }
</script>

<style scoped>
    .text-xxl {
        font-size: 3em !important;
    }

    img {
        width: 6em;
        height: 6em;
        border-radius: 50%;
        object-fit: cover;
    }

    .btn-lighter {
        padding: 15px 20px !important;
    }
    .toolbar {
        background: #ffffff !important;
        color: #000000;
    }
</style>
