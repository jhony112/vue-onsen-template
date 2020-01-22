<template>
    <v-ons-page>
        <ons-toolbar :style=app_theme modifier="no-shadow">
            <div class="left">
                <ons-icon size="20px" icon="fa-user-circle"></ons-icon>
            </div>


            <div class="right">
            <ons-icon size="20px" icon="fa-qrcode"></ons-icon>
            </div>
        </ons-toolbar>
        <div class="page__background" style="background-color: #eaeaea"></div>
        <div class="content">
            <div class="balance-sheet">
                <div class="flex-sb">
                    <div class="text-bold text-xl">
                        Balance
                    </div>
                    <div class="text-bold text-xl"><span class="naira">NGN</span>500.00</div>
                </div>
                <div class="flex-sb m-t-20">
                    <div class="btn btn-primary btn-sm text-bold  btn-block ">
                        <i class="fa fa-arrow-left"></i>  Request
                    </div>
                    <div style="width: 15px"></div>
                    <div class="btn btn-primary btn-sm text-sm text-bold btn-block ">Send <i class="fa fa-arrow-right"></i> </div>
                </div>
            </div>
        </div>
    </v-ons-page>
</template>

<script>
    export default {
        name: "HomePage"
    }
</script>

<style scoped>
    .balance-sheet {
        position: absolute;
        bottom: 0;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;
        background: white;
        width: 100%;
        padding: 25px 18px;
        box-sizing: border-box;
    }
</style>
