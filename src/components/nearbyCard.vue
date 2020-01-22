<template>
    <div class="nearby">
        <img src="https://source.unsplash.com/300x300/?food,resturant" class="poster">
        <div class="details">
            <div class="text-md text-bold">KFC Lekki</div>
            <div class="flex-sb">
                <div class="text-xs ">Avenue a jd dkskhd</div>
                <div class="text-xs text-up m-t-3 ">2.5K Miles</div>

            </div>

            <img class="dp" src="https://source.unsplash.com/300x300/?young">
        </div>

    </div>
</template>

<script>
    export default {
        name: "nearbyCard"
    }
</script>

<style scoped lang="scss">
    .nearby {
        width: 100%;
        height: 200px;
        box-sizing: border-box;

        margin-bottom: 10px;

        .poster {
            width: 100%;
            height: 75%;
            border-top-right-radius: 10px;
            border-top-left-radius: 10px;
            object-fit: cover;
        }
        .details {
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: center;
            background: #1e2a76;
            color:white;
            margin-top: -4px;
            box-sizing: border-box;
            height: 26%;
            padding: 2px 25px;
            border-radius: 0 0 10px 10px;
            width: 100%;
        }

        .dp {
            position: absolute;
            width: 50px;
            height: 50px;
            object-fit: contain;
            right: 20px;
            top: -2em;
            border: 3px solid white;
            border-radius: 50%;
        }
    }
</style>
