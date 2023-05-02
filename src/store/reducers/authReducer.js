const initialState = {
    isAuth: false
};

const SET_IS_AUTH = "SET_IS_AUTH";

export const authReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_IS_AUTH:
            return {...state, isAuth: action.payload};
        default:
            return state;
    }
};

export const setIsAuth = payload => ({type: SET_IS_AUTH, payload});