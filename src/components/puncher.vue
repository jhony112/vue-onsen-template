<template>
    <div class="puncher_container">
        <div class="flex-row">
            <div :key="index" class="punch" v-for="(index) in max" v-bind:class="{filled:index<=count}"></div>
        </div>

        <div class="msg text-sm m-t-3" v-if="max===count">
            You can claim this reward in store
        </div>
    </div>
</template>

<script>
    export default {
        name: "puncher",
        props: {
            count: {
                type: Number,
                default: 4
            },
            max: {
                type: Number,
                default: 5
            }
        },


    }
</script>

<style scoped lang="scss">
    .puncher_container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;

        .punch {
            width: 1.5em;
            height: 1.5em;

            margin-right: 3px;
            border-radius: 50%;
            background: #c0c0c0;
            &.filled {
                background: #1e2a76;

            }
        }
    }
</style>
