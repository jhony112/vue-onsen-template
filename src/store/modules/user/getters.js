const getters = {
    GET_USER: (state) => state.USER,
    GET_AUTH_TOKEN: (state) => state.AUTHENTICATION_TOKEN,
    IS_AUTHENTICATED: (state) => state.AUTHENTICATION_TOKEN || false,
    RECENTLY_PLAYED: (state) => state.RECENTLY_PLAYED || [],
    GET_PLAYLIST: (state) => state.PLAYLIST || [],
    CURRENT_SONG: (state) => state.CURRENT_SONG,
    PLAYER_STATE: (state) => state.PLAYER_STATE
};

export {getters};
