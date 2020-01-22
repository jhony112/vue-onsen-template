import {getters} from './getters';
import {mutations} from './mutations';


const state = {
    USER: '',
    RECENTLY_PLAYED: [],
    PLAYLIST: [],
    AUTHENTICATION_TOKEN: '',
    CURRENT_SONG: {},
    PLAYER_STATE: false,
};

export default {state, getters, mutations}
