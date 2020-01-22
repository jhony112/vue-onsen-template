<template>
    <div class="bubble" v-bind:class="{recipient:this.mine,sender:!this.mine}">
        <div class="text-white">{{msg}}</div>
    </div>
</template>

<script>
    export default {
        name: "chatBubble",
        props:['msg','mine'],
        data(){
            return{


            }
        },
    }
</script>

<style scoped>
    .bubble {
        margin-bottom: 15px;
    }
</style>
