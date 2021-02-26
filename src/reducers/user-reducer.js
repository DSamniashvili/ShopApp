import {
    USER_LOG_IN_FAILED,
    USER_LOG_IN_SUCCESS,
    SEND_LOGIN_USER,
    SEND_USER_LOGOUT,
    USER_LOG_OUT_SUCCESS,
    USER_LOG_OUT_FAILED
} from '../constants/action-constants';

const initialState = {
    user: [],
    isLoading: false,
    errorMessage: '',
}

const user = function (state = initialState, action) {
    switch (action.type) {
        case USER_LOG_IN_SUCCESS:
            return {
                ...state,
                user: action.payload.user,
                isLoading: false,
                errorMessage: '',
            }
        case USER_LOG_IN_FAILED:
            return {
                ...state,
                errorMessage: action.payload.errorMessage || '',
                isLoading: false,
            }

        case SEND_LOGIN_USER:
            return {
                ...state,
                isLoading: true,
            }
        case SEND_USER_LOGOUT:
            return {
                ...state,
                isLoading: true,
            }
        case USER_LOG_OUT_SUCCESS:
            return {
                ...state,
                user: [],
                isLoading: false,
            }
        case USER_LOG_OUT_FAILED:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload.errorMessage,
            }
        default:
            return state;
    }
};

export default user;