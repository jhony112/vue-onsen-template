<template>
    <ons-page id="transferUI">
        <Loader v-if="loading" message="Please Wait"></Loader>
        <v-ons-toolbar>
            <div class="left" @click="back(back_config)">
                <i class="ion-ios-arrow-back  fa-2x m-l-10"></i>
            </div>
            <div class="center ">
                <div class="text-bold ">₦{{getAmount}}</div>
            </div>
            <div class="right ">
                <div @click="sendMoney" v-bind:class="{disabled:isDisabled}" class="btn btn-sm  btn-round btn-lighter text-caps text-bold text-white ">{{type}}</div>
            </div>
        </v-ons-toolbar>

        <div class="page__background" style="background: white"></div>
        <div class="content" style="background: white" id="content">


            <div class="form-group " style="margin-bottom: -1px;border-top: 1px solid rgba(202,202,202,0.53);">
                <div class="input-icon-wrap bg-white m-t-10 ">
                    <span class="input-icon bg-white color-primary"><span class="text-bold ">To :</span></span>
                    <input placeholder="Name, @Username, Phone, Email" type="text" class="input-with-icon color-primary"
                           v-model="recipient" tabindex="1">
                </div>
            </div>
            <div class="form-group" style="margin-bottom: 0px;border-top: 1px solid rgba(202,202,202,0.53);">
                <div class="input-icon-wrap bg-white m-t-10">
                    <span class="input-icon bg-white color-primary"><span class="text-bold ">For :</span></span>
                    <input placeholder="Flex, Bills etc" type="text" class="input-with-icon" v-model="narration"
                           tabindex="2">
                </div>
            </div>
            <div class="" id="contactsSection">
                <div class="heading text-grey text-bold ">Recently Used</div>
                <div class="section ">
                    <contact :contact="{name:'john',number:'050050400504'}"></contact>
                    <contact :contact="{name:'femi',number:'090050400504'}"></contact>

                    <!--<div class="w-full padded bg-white ">-->
                    <!--<div class="btn btn-outline ">Contacts</div>-->
                    <!--</div>-->

                </div>
                <div class="heading text-grey text-bold ">Contact</div>
                <div class="section ">

                    <contact v-if="contacts.length>0" v-for="contact in contacts" :contact="contact"
                             @selected="select(contact)"
                    >

                    </contact>
                    <!--<div v-if="loading_contacts" class="pos-absolute ab-c-m" style="top: 5em">-->
                    <!--<i class="ion ion-ios-hourglass text-center fa-2x fa-spin"></i>-->
                    <!--</div>-->
                    <div
                            class="w-full padded bg-white "
                            @click="selectContact">
                        <div class="btn btn-otl-primary ">Choose Contact</div>
                    </div>
                    {{selected}}
                </div>
            </div>

        </div>


    </ons-page>
</template>

<script>

    import {transferService} from "../../services/transfer.service";
    import contact from '../../components/contact.vue'

    let _ = require('underscore');
    import Loader from '../../components/Loader';
    import Confirmation from '../transfer/confirmation.vue';

    export default {
        name: "signup",
        statusBar: "#00a13a",
        components: {Loader, contact},
        data() {
            return {
                phone_number: "",
                loading: false,
                query: "",
                amount: 0,
                contacts: [],
                recipient:"",
                narration:"",
                type:"",
                scrolled: false,
                selected: {},
                start: 0,
                back_config:{statusBar:"green"},
                end: 20,
                loading_contacts: false

            };
        },
        computed: {
            isSearching() {
                return this.query.length > 0;
            },
            isDisabled() {
                return (_.isEmpty(this.recipient) || this.amount<1|| this.recipient.length<2)
            },
            getAmount() {
                return this.moneyFormat(this.amount);
            },


        },
        init: function () {


        },
        created() {

        },
        destroy() {
            // document.getElementById('content').removeEventListener('scroll', this.handleScroll);
        },
        mounted() {
            console.log("mounted transfer")
            this.amount = this.$store.getters['app/transaction'].amount
            this.type = this.$store.getters['app/transaction'].type
            // document.getElementById('content').addEventListener('scroll', this.handleScroll);
            // this.getChunk();
        },
        methods: {
            select(contact) {
                alert('clic')
                this.selected = contact
            },
            handleScroll(event) {
                console.log('scroll detected');
                //  console.log(event);
                let el = document.getElementById("content");
                if (el.scrollTop + (window.innerHeight - 56) >= el.scrollHeight) {
                    console.log("bottom")
                    this.getChunk();
                }

            }
            ,
            getContacts() {
                let self = this;
                this.loading_contacts = true;
                this.contacts = [];
                this.$store.dispatch("app/getContacts", function (cont) {
                    self.loading_contacts = false;
                    self.contacts = cont.slice(self.start, self.end)
                    self.start += 20;
                    self.end += 20;
                });

            },
            selectContact() {
                let self = this;
                this.$store.dispatch("app/selectContacts", function (contact) {
                    console.log('The following contact has been selected:' + JSON.stringify(contact));
                    self.contacts = [];
                    self.contacts.push(contact);
                });

            },

            getChunk() {

                let new_batch = this.$store.getters['app/contacts'].slice(this.start, this.end)
                console.log(new_batch);
                this.contacts = this.contacts.concat(new_batch);
                console.log(this.contacts);
                this.start += 20;
                this.end += 20;
            },
            sendMoney(){
                this.$store.commit('app/transaction', {recipient: this.recipient,narration:this.narration});
                // console.log(a);
                this.push(Confirmation, {key:"confirmation",statusBar:"black"});
            }
        },
        watch: {
            query: function (val) {
                this.contacts = this.contacts.filter(function (one) {
                    return one.name.includes(val);
                })
            },
            selected: function (val) {
                console.log(val);
            }
        }

    }
</script>

<style scoped>
    #transferUI {
        /*height: 200vh;*/
    }

    .btn-pay {
        /*font-size: 1em;*/
        font-weight: 600;
        border-radius: 30px;
        color: white;
        height: 45px;
        background: #00a13a !important;
        /* height: 40px; */
        text-align: center;
        margin-left: 15px;
        margin-top: 5px;

    }

    .section {
        padding: 8px 0 0 0px !important;
        background: #ffffff !important;

    }

    .bg-grey {
        background: #F1F1F1 !important;
        color: black !important;
    }

    .input-icon-wrap {
        padding: 10px 18px;
        border-radius: unset;
    }

    .search-area {
        position: fixed;
        top: 56px;
        width: 100%;
        z-index: 1000;
    }

    .heading {
        padding: 15px 18px;
        background: #F1F1F1 !important;
    }

    .page__content {
        background: #ececec !important;
    }

    .page, .page__content, .page--material, .page--material__content {
        background: white !important;
    }

    .toolbar {
        background: #00a13a !important;
        color: #ffffff;
    }

    .color-primary {
        color: #00a13a !important;
    }

    ::placeholder {

        color: rgba(0, 161, 58, 0.51) !important;
    }

    .btn-otl-primary {
        color: #00a13a !important;
        font-weight: bold;
        border-color: rgba(111, 111, 111, 0.3) !important;;
    }

    .text-bold {
        position: relative;
        font-weight: 800 !important;
    }

    .toolbar__center .text-bold {
        position: relative;
        display: flex;
        align-items: flex-start;
        justify-content: center;
    }

    .toolbar__right {
        font-size: 17px;
        line-height: 48px !important;
    }

    .siguel {
        /*position: absolute;*/
        /* top: 25px; */
        top: -4px;
        letter-spacing: .5px;
        line-height: 6em;
        /*left: 4.5em;*/
        font-size: 0.5em;
        font-weight: 800;
    }

    .btn-lighter {
        padding: 1px 8px!important;
        border-radius: 10px!important;
        font-size: 1em!important;
        line-height: 2.2em;
        margin-top: 5px;
        min-width: 30px;
    }
</style>
