const mutations = {
    SET_USER_DATA: (state, user) => state.USER = user,
    SET_CURRENT: (state, song) => state.CURRENT_SONG = song,
    SET_PLAYER_STATE: (state, playing) => state.PLAYER_STATE = playing,
    SET_AUTH_TOKEN: (state, authentication) => {
        state.AUTHENTICATION_TOKEN = authentication;
    },
    SAVE_PLAYED: (state, song) => {

        if (state.RECENTLY_PLAYED.length === 0) {
            state.RECENTLY_PLAYED.push(song)
        }
        else {

            // check whether id exists
            var index = state.RECENTLY_PLAYED.findIndex(item => item.id === song.id);

            if (index > -1) {
                // check quantity to determin whether replace the exist one or not
                // if (id.quantity === this.itemArr[index].quantity) {
                //     return;
                // } else {
                //     // update quantity for the exist one
                //     this.itemArr[index].quantity = id.quantity;
                // }
            } else {
                // add the new item which dosen't exist
                state.RECENTLY_PLAYED.push(song);
            }


        }

    },
    SAVE_PLAYLIST: (state, song) => {

        if (state.RECENTLY_PLAYED.length === 0) {
            state.RECENTLY_PLAYED.push(song)
        }
        else {

            // check whether id exists
            var index = state.RECENTLY_PLAYED.findIndex(item => item.id === song.id);

            if (index > -1) {
                // check quantity to determin whether replace the exist one or not
                // if (id.quantity === this.itemArr[index].quantity) {
                //     return;
                // } else {
                //     // update quantity for the exist one
                //     this.itemArr[index].quantity = id.quantity;
                // }
            } else {
                // add the new item which dosen't exist
                state.RECENTLY_PLAYED.push(song);
            }


        }

    },
    SET_PLAYLIST: (state, playlist) => {
        state.PLAYLIST = playlist;
    },
    SET_RECENTLY_PLAYED: (state,recents) => {
        state.RECENTLY_PLAYED = recents;
    },
    REMOVE_AUTH: (state) => {
        state.AUTHENTICATION_TOKEN = '';
        state.USER = '';
        state.RECENTLY_PLAYED = [];
        state.PLAYLIST = [];
    },
};

export {mutations};
