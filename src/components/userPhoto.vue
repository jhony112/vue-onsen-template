<template>
    <img :src=src :style="{
                    width: m_width + 'px',
                    height: m_height + 'px'
                }"/>
</template>

<script>
    export default {
        name: "userPhoto",
        props: ["size", "src"],
        data(){
            return{
               m_width: (this.size == 'large') ? 80 : 30,
               m_height:(this.size == 'large') ? 80 : 30
            }
        },

        mounted() {

        }
    }
</script>

<style scoped>
    img {
        border-radius: 50%;
        object-fit: contain;
        border: 3px solid rgba(13, 190, 23, 0.87);
    }
</style>
