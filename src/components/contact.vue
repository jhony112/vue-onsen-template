<template>
    <div class="tran flex-start flex-m" @click="selectContact">

        <img src="../assets/images/user.svg"/>
        <div class="m-l-10 grid-8">
            <div class="text-bold text-md">{{contact.name}}</div>
            <div class="text-sm text-grey">@{{contact.username?contact.username: contact.number}}</div>
        </div>


    </div>
</template>

<script>

    export default {
        name: "contact",
        props:["contact"],
        computed:{
            getImage(){
                return this.contact.thumb? this.contact.thumb:"../assets/images/user.svg"
            }
        },
        methods:{
            selectContact(){
                this.$emit('selected', this.contact);
            }
        }
    }
</script>

<style scoped>
    img {
        width: 3.5em;
        height: 3.5em;
        border-radius: 50%;
    }

    .tran {
        padding: 15px 18px;
        background: white;
        border-radius: 0px;
        border-bottom: 1px solid #e8dddd;
    }

    .status {
        background: #00a13a;
        color: white;
        font-size: .6em;
        display: inline-block;
        padding: 5px 8px;
        border-radius: 3px;
    }

    .sign {
        font-size: .5em;
        font-weight: 500;
        margin-right: 2px;

    }

    .flex-up {

        justify-content: flex-end;
        align-items: baseline;
    }

    .tail {
        font-size: .5em;
        font-weight: light;
    }

    .flex-start {
        display: flex;
        justify-content: flex-start;
    }
</style>
