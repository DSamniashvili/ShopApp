import {
    LOAD_ALBUMS,
    LOAD_ALBUMS_ERROR,
    TEST_ACTION,
    USER_LOG_IN_FAILED,
    USER_LOG_IN_SUCCESS,
    SEND_LOGIN_USER,
    SEND_USER_LOGOUT,
    USER_LOG_OUT_SUCCESS,
    USER_LOG_OUT_FAILED
} from '../constants/action-constants';
import axios from 'axios';
import firebase from 'firebase';

export const loadAlbums = (api) => {
    return (dispatch) => {
        return axios.get(api)
            .then(
                response => dispatch(writeAlbumsToState(response.data.results)),
                err => dispatch(writeErrorMessage(err))
            )
    }
}

const writeAlbumsToState = (res) => {
    return {
        type: LOAD_ALBUMS,
        payload: {
            albums: res
        },
    }
}


export const testAction = () => {
    return {
        type: TEST_ACTION,
    }
}

const writeErrorMessage = (error) => {
    return {
        type: LOAD_ALBUMS_ERROR,
        payload: {
            error
        },
    }
}

export const onLoginSuccessAction = (dispatch, user) => {
    dispatch({
        type: USER_LOG_IN_SUCCESS,
        payload: {
            user,
        },
    })
}

const onLoginFailAction = (dispatch, errorMessage) => {
    dispatch({
        type: USER_LOG_IN_FAILED,
        payload: {
            errorMessage,
        },
    })
}


export const signInUserAction = ({ email, password }) => {
    return dispatch => {
        dispatch({
            type: SEND_LOGIN_USER
        })
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                var user = userCredential.user;
                onLoginSuccessAction(dispatch, user);
            })
            .catch((err) => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then((userCredential) => {
                        var user = userCredential.user;
                        onLoginSuccessAction(dispatch, user);
                    })
                    .catch((error) => {
                        var errorCode = error.code;
                        var errorMessage = error.message;
                        onLoginFailAction(dispatch, errorMessage);
                    });
            });
    }
}

export const signOutUserAction = () => {
    return dispatch => {
        dispatch({
            type: SEND_USER_LOGOUT
        })
        firebase.auth().signOut().then(() => {
            console.log("Sign-out successful.");
            onLogOutSuccessAction(dispatch);
        }).catch((error) => {
            console.log('error: ', error);
            onLogOutFailAction(dispatch, error);
        });
    }
}


const onLogOutSuccessAction = (dispatch) => {
    dispatch({
        type: USER_LOG_OUT_SUCCESS,
        payload: {},
    })
}


const onLogOutFailAction = (dispatch, errorMessage) => {
    dispatch({
        type: USER_LOG_OUT_FAILED,
        payload: {
            errorMessage,
        },
    })
}
