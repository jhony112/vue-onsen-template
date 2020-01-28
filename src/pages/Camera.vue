<template>
    <ons-page id="Camera">
        <ons-toolbar :style=app_theme modifier="no-shadow">
            <div class="left">
                <ons-icon size="30px" icon="md-apps"></ons-icon>
            </div>

            <div class="center text-white"></div>

            <div class="right">
                <ons-icon size="30px" icon="md-account-circle"></ons-icon>
            </div>
        </ons-toolbar>
        <div class="page__background" style="background: black"></div>
        <div class="content">
            <div class="welcome-area " >
                <div class="padded">
                    <user-photo src="https://placehold.it/200x200" size="small"></user-photo>
                    <div class="text-xxl text-bold">Hey Femi how can i help you today</div>
                </div>


            </div>

            <div class="input-area">
                <input-area></input-area>
            </div>
        </div>

    </ons-page>
</template>

<script>
    import userPhoto from '../components/userPhoto.vue'
    import inputArea from '../components/inputArea'
    import chatBubble from '../components/chatBubble'
    import resize from 'vue-resize-directive'

    export default {
        directives: {
            resize,
        },
        beforeCreate(){
            this.$store.commit('navigator/options', {
                // Sets animations
                animation: "lift-ios",
                // Resets default options
                callback: () => this.$store.commit('navigator/options', {})
            });
        },
        components: {chatBubble, inputArea, userPhoto},
        data() {
            return {
                componentKey: 0,
            };
        },
        methods: {
            forceRerender() {
                this.componentKey += 1;
            },
            onResize(){
                JQuery('.discussion').animate({scrollTop: JQuery('.discussion').prop("scrollHeight")}, 500);
                console.warn('resized');
            }
        },
        mounted: function () {
          //  alert(this.isPhoneX())
        },
        page: "Camera",
        show: function () {
            console.warn('show works')
        },

    };
</script>

<style scoped>
    .camera {
        width: 100%;
        height: 100%;
        background-color: lightgrey;
        vertical-align: middle;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .focus {
        width: 100px;
        height: 100px;
        border: 12px solid whitesmoke;
        border-radius: 100%;
    }

    .input-area {
        position: fixed;
        bottom: 0;
        min-height: 20vh;
        width: 100%;
    }

    .welcome-area {
        color: white;
        height: 90vh;
        /*padding: 14px 15px;*/
    }
</style>
