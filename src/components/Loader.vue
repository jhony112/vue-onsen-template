<template>

    <v-ons-modal :visible="true" >
        <img src="../assets/images/boomi.svg">
        <div id="busyMessage" class="text-bold text-lg text-white ">{{message}}</div>
        <v-ons-progress-bar id="busyLoader" indeterminate></v-ons-progress-bar>


    </v-ons-modal>
</template>

<script>
    export default {
        name: "Loader",
        props:["message"]
    }
</script>

<style scoped>
    img{
        -webkit-animation-name: spin;
        -webkit-animation-duration: 2000ms;
        -webkit-animation-iteration-count: infinite;
        -webkit-animation-timing-function: linear;
        -moz-animation-name: spin;
        -moz-animation-duration: 2000ms;
        -moz-animation-iteration-count: infinite;
        -moz-animation-timing-function: linear;
        -ms-animation-name: spin;
        -ms-animation-duration: 2000ms;
        -ms-animation-iteration-count: infinite;
        -ms-animation-timing-function: linear;
        animation-name: spin;
        animation-duration: 2000ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }
    @keyframes spin {
        0% {
            -webkit-transform: rotate(0deg);
        }
        20% {
            -webkit-transform: rotate(45deg);
        }
        40% {
            -webkit-transform: rotate(-45deg);
        }
        60% {
            -webkit-transform: rotate(-90deg);
        }
        100% {
            -webkit-transform: rotate(0deg);
        }

    }
    .progress-bar--indeterminate:after, .progress-bar--indeterminate:before {
        background: #3d5afe!important;
    }
    .progress-bar__primary, .progress-bar__secondary {
        background: #3d5afe!important;
    }
    .modal{
        background-color: rgba(0, 0, 0, 0.89)!important;
    }
</style>
