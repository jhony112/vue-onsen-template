import axios from 'axios'
const qs = require('qs');

const ApiService = {
    baseUrl: '',
    init(baseURL) {
        ApiService.baseUrl = baseURL;
        axios.defaults.baseURL = baseURL;

    },
    getBaseUrl() {
        return ApiService.baseUrl;
    },
    setHeader(token) {
        axios.defaults.headers.common["Authorization"] = `${token}`
    },
    removeHeader() {
        axios.defaults.headers.common = {}
    },

    get(resource) {
        if(!this.isOnline()) return alert("Cannot connect to server, kindly check your network connection and try again.");
        return axios.get(resource)
    },

    post(resource, data) {
        if(!this.isOnline()) return alert("Cannot connect to server, kindly check your network connection and try again.");
       // return axios.post(resource, qs.stringify(data))
       return axios.post(resource, data)
    },

    put(resource, data) {
        return axios.put(resource, data)
    },

    delete(resource) {
        return axios.delete(resource)
    },
    isOnline() {
       return navigator.onLine
        ///return connection;
    },

    /**
     * Perform a custom Axios request.
     *
     * data is an object containing the following properties:
     *  - method
     *  - url
     *  - data ... request payload
     *  - auth (optional)
     *    - username
     *    - password
     **/
    customRequest(data) {
        return axios(data)
    }
};

export {ApiService};
