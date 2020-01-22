import {ApiService} from "./api.service";

const userService = {
    login: ({email, password}) => {
        return new Promise(function (resolve, reject) {
            ApiService.post('/admin/login', {email: email, password: password}).then((res) => {
                if (res.data.status !== 200)
                    reject(res.data.message);

                let token = res.data.data.token;
                resolve(token);
            }).catch((error) => {
                reject(error.message);
            });
        });
    },
    authorize: async (token) => {
        return await ApiService.customRequest({
            headers: {'Authorization': token},
            method: "POST",
            url: ApiService.getBaseUrl() + "/admin/authorize"
        }).then((res) => {
            return Promise.resolve(res.data.data);
        }).catch(() => {
            return Promise.reject(false);
        });
    }
};

export {userService};