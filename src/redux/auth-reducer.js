import {api} from "../dal/api";

const SET_USER_DATA = 'SET_USER_DATA';
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
            return  {
                ...state,
                message:action.message
            }
    }
    return state
};



export const setAuthUserData = (id,email,login,isAuth) => {
    return {
        type:SET_USER_DATA,
        data: {id,email,login,isAuth}
    }
};

export const setErrorMessage = (message) => {
    debugger
    return {
        type: SET_MESSAGE,
        message
    }
};

export const getAuthUserData = () => (dispatch) => {
    api.authMe()
        .then(response => {
            if(response.data.resultCode === 0) {
                let {id,email,login} = response.data.data;
                dispatch(setAuthUserData(id,email,login,true))
            }
        })
};


export const loginAuth = (email,password,rememberMe)  => (dispatch) => {
    api.login(email,password,rememberMe)
        .then((res)=>{
            if(res.data.resultCode === 10) {
                dispatch(getAuthUserData())
            } else {
                alert(res.data.messages[0]);
                dispatch(setErrorMessage(res.data.messages[0]))
            }

    })

};

export const logOut = () => (dispatch) => {
    api.logOut().then(()=> {
        dispatch(setAuthUserData(null,null,null,false))
    })
};

export default authReducer