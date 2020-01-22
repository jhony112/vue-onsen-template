<template>
    <v-ons-page id="loginUI">
        <Loader v-if="loading" message="Please Wait"></Loader>

        <div class="page__background"></div>
        <div class="content">



        </div>


    </v-ons-page>
</template>

<script>
    import {onboardingService} from "../../services/onboarding.service";
    import signUp from "./signUp";


    let _ = require('underscore');
    import Loader from '../../components/Loader';

    export default {
        name: "clubDetail",
        statusBar: "#00a13a",
        components: {Loader},
        data() {
            return {
                email: "",
                password: "",
                loading: false

            };
        },
        computed: {
            isDisabled() {
                let re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
                return (!re.test(this.email) || _.isEmpty(this.email) || this.email.length <= 5 || _.isEmpty(this.password) || this.password.length <= 4)
            },

        },
        methods: {

        },

    }
</script>

<style scoped>
    .page__content {
        color: white;
    }

    .page__background {
        background: #0D0D21 !important;
    }

    .form-group .floating-label {
        color: white;
        top: -18px;
        background: inherit;
        left: 0;
    }

    .input-with-icon {
        color: white !important;
        background: transparent !important;
        padding-left: 0;
    }

    .formArea {
        padding: 10px 35px
    }
</style>
