<template>
    <div class="reward__container card">
        <div class="info__area" v-bind:class="{complete :max_punch===punch}">
            <div class="flex-sb">
                <div class="">
                    <div class="text-bold text-lg text-up">
                        Free Meal
                    </div>
                    <div class="text-md">
                        Buy one omo get one free
                    </div>
                </div>
                <div class="">
                    <img src="https://source.unsplash.com/400x400/?">
                </div>
            </div>
        </div>
        <div class="punch__area" >
            <puncher :count="punch" :max="max_punch"></puncher>
            <div class="text-bold text-lg">{{punch}}/{{max_punch}}</div>
        </div>
    </div>
</template>

<script>
    import Puncher from "./puncher";

    export default {
        name: "rewardCard",
        components: {Puncher},
        props: {
            "max_punch": {type: Number, default: 5},
            "punch": {type: Number, default: 5}
        }
    }
</script>

<style scoped lang="scss">
    .reward__container {
        height: 150px;
        padding: 0;
        color: black;
        margin-bottom: 10px!important;
        position: relative;
        .info__area {
            width: 100%;
            box-sizing: border-box;
            padding: 16px;
            height: 55%;
            background: #1e2a76;
            border-top-left-radius: inherit;
            border-top-right-radius: inherit;
            color: white;
            &.complete{
                background: #27c843;
            }
            img {
                width: 3em;
                height: 3em;
                border-radius: 50%;
                object-fit: cover;
                border: 2px solid white;
            }
        }
        .punch__area {
            box-sizing: border-box;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 45%;
            /*background: #1e2a76;*/
            color: black;
            padding: 5px 10px;
            border-bottom-right-radius: inherit;
            border-bottom-left-radius: inherit;

        }
    }
</style>
