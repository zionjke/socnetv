import {getAuthUserData} from "./auth-reducer";

const SET_INITIALIZED = 'SET_INITIALIZED';


const initialState = {
    initialized: false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_INITIALIZED:
            return  {
                ...state,
                initialized: true
            }
    }
    return state
};


export const initializedSuccess = () => {
    return {
        type:SET_INITIALIZED,
    }
};



export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    promise.then(() => {
        dispatch(initializedSuccess())
    })

};



export default appReducer