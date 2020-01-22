<template>
    <div class="slick-input">
        <!--<div class="mic">-->
            <!--<i class="fa fa-microphone"></i>-->
        <!--</div>-->
        <div class="input-area">
            <div class="top-bar flex-sb flex-c-m">
                <div class="grid-1 m-l-5">
                    <div class="menu-item ">
                        <i class="fa fa-microphone"></i>
                    </div>
                </div>
                <div class="grid-9">
                    <textarea-autosize
                            placeholder="Type something here..."
                            ref="input_msg"
                            v-model="message"
                            :min-height="30"
                            :max-height="90"
                            @blur.native="onBlurTextarea"
                    />
                </div>

                <div class="grid-2">
                    <div class="menu-item lg">
                        <i class="zmdi zmdi-mail-send"></i>
                    </div>
                </div>
            </div>
            <!--<div class="bottom-bar flex-sb">-->
                <!--<div class="grid-4 flex-row flex-sb flex-m m-l-5">-->
                    <!--<div class="menu-item">-->
                        <!--<i class="fa fa-camera"></i>-->
                    <!--</div>-->
                    <!--<div class="menu-item">-->
                        <!--<i class="ios ion-ios-image"></i>-->
                    <!--</div>-->
                    <!--<div class="menu-item">-->
                        <!--<i class="fa fa-microphone"></i>-->
                    <!--</div>-->
                <!--</div>-->

            <!--</div>-->
        </div>
    </div>
</template>

<script>
    export default {
        name: "inputArea",
        data() {
            return {
                message: "",
            };
        },
        methods:{
            onBlurTextarea(){
                console.log(this.message);
            }
        }
    }




</script>

<style scoped>
    .menu-item.lg {
        width: 2em;
        height: 2em;
        margin-right: 10px;
        float: right;
        font-size: 1.5em;
        background: #11c399;
    }
    .menu-item.lg i{
        line-height: 2.1em;
        margin-left: 6px;
    }

    .menu-item {
        width: 2em;
        height: 2em;
        border-radius: 50%;
        text-align: center;
        font-size: 1em;
        background: #454242;
        color: white;
    }

    .menu-item i {
        line-height: 2em;
    }

    .mic {
        position: absolute;
        top: 12px;
        width: 3em;
        height: 3em;
        text-align: center;
        line-height: 3em;
        right: 10px;
        z-index: 100;
        color: white;
        background: #0f0f0f;
        border-radius: 50%;
    }

    .slick-input {
        height: auto;
    }

    .top-bar, .bottom-bar {
        box-sizing: border-box;

    }

    .top-bar {
        height: 60%;
        padding-top: 10px;
    }

    .bottom-bar {
        height: 40%;
        background: transparent;
    }

    .top-bar textarea {
        box-sizing: border-box;
        resize: none;
        background: transparent;
        color: white;
        border: unset;
        outline: none;
        padding: 10px 12px;
        font-size: 1.1em;
        font-family: AppFont;
        height: 100%;
        width: 100%;
    }

    .input-area {
        display: flex;
        flex-direction: column;

        background: rgba(16, 16, 16, 0.93);
        width: 100%;
        position: absolute;
        bottom: 0;

    }
</style>
