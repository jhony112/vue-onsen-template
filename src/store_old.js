/* eslint-disable no-console */
import PouchDB from 'pouchdb'
import _ from 'lodash';
import Vue from 'vue'

const db = "klubb_user";
//const raba_recently_used= "raba_recently_used";
export default {
    modules: {
        navigator: {
            strict: true,
            namespaced: true,
            state: {
                stack: [],
                options: {}
            },
            mutations: {
                push(state, page) {
                    state.stack.push(page);
                },
                pop(state) {
                    if (state.stack.length > 1) {
                        state.stack.pop();
                    }
                },
                replace(state, page) {
                    state.stack.pop();
                    state.stack.push(page);
                },
                reset(state, page) {
                    state.stack = [page || state.stack[0]];
                },
                options(state, newOptions = {}) {
                    state.options = newOptions;
                }
            }
        },

        splitter: {
            strict: true,
            namespaced: true,
            state: {
                open: false
            },
            mutations: {
                toggle(state, shouldOpen) {
                    if (typeof shouldOpen === 'boolean') {
                        state.open = shouldOpen;
                    } else {
                        state.open = !state.open;
                    }
                }
            }
        },

        tabbar: {
            strict: true,
            namespaced: true,
            state: {
                index: 1
            },
            mutations: {
                set(state, index) {
                    state.index = index;
                }
            }
        },
        app: {
            strict: true,
            namespaced: true,
            state: {
                database: null,
                data: [],
                user: {
                    balance: 0,
                    first_name: "",
                    last_name: "",
                    pin: "",
                    points: 0,
                    private_key: "",
                    public_key: "",
                    username: "",
                    _id: "",
                    _rev: ""
                },
                payload: {},
                contacts: [],
                selectedContact: {},
                transaction: {},
                history: [],
                options: {}
            },
            getters: {
                // Check if both Larry and Jenny are happy
                payload: state => {
                    return state.payload;
                },
                isLoggedIn: state => {
                    return localStorage.getItem("raba_app");
                },
                user: state => {
                    return state.user
                },
                transaction: state => {
                    return state.transaction;
                },
                getRecentlyUsed: state => {
                    return new Promise((resolve, reject) => {
                        state.database.get(raba_recently_used).then(function (doc) {
                            // handle doc
                            resolve(doc);
                        }).catch(function (err) {
                            console.log(err);
                            reject(err)
                        });
                    })
                },
                contacts: state => {
                    let sorted = state.contacts.sort(function (a, b) {
                        if (a.name < b.name) {
                            return -1;
                        }
                        if (a.name > b.name) {
                            return 1;
                        }
                        return 0;
                    })
                    return sorted.filter((obj, pos, arr) => {
                        return arr.map(mapObj => mapObj['name']).indexOf(obj['name']) === pos;
                    });

                    // return state.contacts;
                },
                getBalance(state) {
                    return state.user.balance;
                },
                getHistory(state) {
                    return state.history;
                },


            },

            mutations: {
                init(state, data) {
                    state.database = data.database;
                },
                register(state, obj) {
                    Object.assign(state.payload, obj);

                },
                transaction(state, obj) {
                    Object.assign(state.transaction, obj);
                },
                loadUser(state, data) {
                    state.user = data;

                },
                updateUser(state, data) {
                    Vue.set(state.user, Object.keys(data)[0], Object.values(data)[0])
                    // state.data.user = { ...state.data.user, data }
                    // Object.assign(state.data.user, data);
                    //  state.data.user = { ...state.data.user, data }
                    // state.data.user = data;

                },
                save(state, data) {
                    state.data.results = data;
                },
                contacts(state, data) {
                    state.contacts = data
                },

            },

            actions: {
                init(context) {
                    let db = new PouchDB('dbname');
                    context.commit("init", {database: db});
                    console.log('commit db')
                },
                dropDb(context) {
                    context.state.database.destroy(function (err, response) {
                        if (err) {
                            return console.log(err);
                        } else {

                            context.dispatch('init');
                            console.log("Database cleared");
                        }
                    });
                },
                insert(context, data) {
                    data._id = Date.now();
                    context.state.database.put(data);
                },
                query(context, data) {
                    return new Promise((resolve, reject) => {
                        context.state.database.get(data).then(function (doc) {
                            // handle doc
                            resolve(doc);
                        }).catch(function (err) {
                            console.log(err);
                            reject(err)
                        });
                    })


                },
                getUser(context) {
                    return new Promise((resolve, reject) => {
                        context.state.database.get(db).then(function (doc) {
                            // handle doc
                            context.state.user = doc;
                            resolve(doc);
                        }).catch(function (err) {
                            console.log(err);
                            reject(err)
                        });
                    })
                },
                saveUser(context, data) {
                    data._id = db;
                    context.state.database.put(data, function (err, doc) {
                        if (err) {
                            console.log(err);
                            //return reject(err)
                        }
                    });
                    console.log("saved user");
                },
                updateUser(context, data) {
                    context.state.database.get(db, function (err, doc) {

                        if (err) return console.log(err);
                        let payload = {};
                        if (!err && doc) payload = doc;

                        Object.assign(payload, data);
                        context.state.database.put(payload, function (err, response) {
                            if (err) {
                                console.log(err);
                                //return reject(err)
                            }
                            // handle response
                            console.log("updated user " + payload.username);
                            context.commit('updateUser', data);
                        });


                    });
                },



            }
        },
        user: {
            strict: true,
            namespaced: true,
            state: {},
            getters: {
                // Check if both Larry and Jenny are happy

            },

            mutations: {

                save(state, obj) {
                    Object.assign(state, obj);

                }
            },

            actions: {}
        },

        preferences: {
            strict: true,
            namespaced: true,
            state: {
                settings: [],
                config: [],

            },

            mutations: {
                settings(state, val) {
                    state.settings.push(val);
                },
                config(state, val) {
                    state.config.push(val);
                },
                initialiseStore(state) {
                    // Check if the ID exists
                    if (localStorage.getItem('**raba_store**')) {
                        // Replace the state object with the stored item
                        this.replaceState(
                            Object.assign(state, JSON.parse(localStorage.getItem('**raba_store**')))
                        );
                    }
                }
            },


        },

    }
};
