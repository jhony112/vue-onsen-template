import {userService} from "../../../services/user.service";
import {ApiService} from '../../../services/api.service';



const actions = {
    SAVE_PLAYED: (context, song) => context.commit('SAVE_PLAYED', song),
    CURRENTLY_PLAYING: (context, song) => context.commit('SET_CURRENT', song),
    SAVE_PLAY_STATE: (context, play) => context.commit('SET_PLAYER_STATE', play),
    SAVE_USER_PLAYED: async (context, song) => {
        return await userService.save_recent(song).then((res) => {
            console.log(res);
        }).catch((err) => {

        });
    },
    SAVE_TO_PLAYLIST: async (context, payload) => {
        return await userService.add_to_playlist(payload.pid,payload.song).then((res) => {
            console.log(res);
        }).catch((err) => {

        });
    },
    UNSET_USER: (context) => context.commit('REMOVE_AUTH'),
    isLoggedIn(context) {
        // Fetch the User token
        return context.getters.IS_AUTHENTICATED;
    },
    LOGIN: async (context, {username, password}) => {
        return await userService.login(username,password).then(async (data) => {
            // Store the User Token
            context.commit('SET_AUTH_TOKEN', data.token);
            context.commit('SET_USER_DATA', data.user);
            context.commit('SET_RECENTLY_PLAYED', data.recently_played);
            context.commit('SET_PLAYLIST', data.playlist);
            ApiService.setHeader(data.token);
            return Promise.resolve(data.token);
        }).catch((error) => {
            return Promise.reject(error);
        });
    },
    AUTHORISE_USER: async (context, token) => {
        return await userService.authorize(token).then((res) => {

            context.commit('SET_USER_DATA', res.user);
            context.commit('SET_RECENTLY_PLAYED', res.recently_played);
            context.commit('SET_PLAYLIST', res.playlist);
            return true;
        }).catch((err) => {
            window.console.log(err);
            return false;
        });
    }
};

export {actions};
