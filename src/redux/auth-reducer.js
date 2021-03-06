import {api} from "../dal/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'AUTH-REDUCER/SET_USER_DATA';
const SET_MESSAGE = 'SET_MESSAGE';

const initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false,
    message: ''
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
            };
        case SET_MESSAGE:
            return {
                ...state,
                message: action.message
            }
    }
    return state
};


export const setAuthUserData = (id, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        data: {id, email, login, isAuth}
    }
};

export const setErrorMessage = (message) => {
    return {
        type: SET_MESSAGE,
        message
    }
};

export const getAuthUserData = () => async (dispatch) => {
    let response = await api.authMe();

    if (response.data.resultCode === 0) {
        let {id, email, login} = response.data.data;
        dispatch(setAuthUserData(id, email, login, true))
    }

};

export const loginAuth = (email, password, rememberMe) => async (dispatch) => {

    try {
        const response = await api.login(email, password, rememberMe);
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            let message = response.data.message[0];
            dispatch(setErrorMessage(message));
            dispatch(stopSubmit('login', {_error: message}));
        }
    } catch (e) {
        console.log(e)
    }


};

export const logOut = () => async (dispatch) => {
    const response = await api.logOut();
    if (response.data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
    }
};

export default authReducer
