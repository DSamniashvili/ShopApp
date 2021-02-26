import { LOAD_ALBUMS, LOAD_ALBUMS_ERROR, TEST_ACTION } from '../constants/action-constants';

const albums = function (state = [], action) {
    switch (action.type) {
        case LOAD_ALBUMS:
            return {
                ...state,
                albums: action.payload.albums,
            }
        case LOAD_ALBUMS_ERROR:
            return {
                ...state,
                albums: [],
                error: action.payload.error,
            }
        case TEST_ACTION:
            return {
                ...state
            }
        default:
            return state;
    }
};

export default albums;