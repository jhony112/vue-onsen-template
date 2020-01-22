import {ApiService} from "./api.service";



const transferService = {
    checkUserName: async (username) => {
        return await ApiService.get(`/accounts/username/${username}`).then((res) => {
            return Promise.resolve(res.data);
        }).catch(() => {
            return Promise.reject(false);
        });
    },
    checkPhoneNumber: async (phone) => {
        return await ApiService.get(`/accounts/phone/${phone}`).then((res) => {
            return Promise.resolve(res.data);
        }).catch(() => {
            return Promise.reject(false);
        });
    },
    sendOtp: async (phone) => {
        return await ApiService.get(`/otp/phone/${phone}`).then((res) => {
            if (res.data.status === 200) {
                return Promise.resolve(res.data);
            }
            return Promise.reject(false);
        }).catch(() => {
            return Promise.reject(false);
        });
    },
    verifyOtp: async (sessionID, otp) => {
        return await ApiService.get(`/otp/verify/${sessionID}/${otp}`).then((res) => {
            return Promise.resolve(res.data);
        }).catch(() => {
            return Promise.reject(false);
        });
    },
    register: async (payload) => {

        return await ApiService.post('/accounts/signup',  payload).then((res) => {
            return Promise.resolve(res.data);
        }).catch(() => {
            return Promise.reject(false);
        });
    },
    registerRaw: async (payload) => {


        var options = {
            method: 'POST',
            url: 'https://harlem-girl.now.sh/accounts/signup',
            headers:
                {
                    'cache-control': 'no-cache',
                    Connection: 'keep-alive',
                    'Content-Length': '13',
                    'Accept-Encoding': 'gzip, deflate',
                    Host: 'harlem-girl.now.sh',
                    'Cache-Control': 'no-cache',
                    Accept: '*/*',
                    'Content-Type': 'application/json'
                },
            body: JSON.stringify(payload)
        };

        request(options, function (error, response, body) {
            if (error) console.log(error);

            console.log(body);
        });

    }



}
;


export {transferService};
