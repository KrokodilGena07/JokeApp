const initialState = {
    jokes: []
};

const SET_JOKE = "SET_JOKE";
const ADD_JOKE = "ADD_JOKE";
const SET_MANY_JOKES = "SET_MANY_JOKES";
const ADD_MANY_JOKES = "ADD_MANY_JOKES";
const REMOVE_JOKE = "REMOVE_JOKE";
const REMOVE_JOKES = "REMOVE_JOKES";

export const jokeReducer = (state=initialState, action) => {
    switch (action.type) {
        case SET_JOKE:
            return {...state, jokes: [action.payload]};
        case ADD_JOKE:
            return {...state, jokes: [...state.jokes, action.payload]};
        case SET_MANY_JOKES:
            return {...state, jokes: action.payload};
        case ADD_MANY_JOKES:
            return {...state, jokes: [...state.jokes, ...action.payload]};
        case REMOVE_JOKE:
            return {...state, jokes: state.jokes.filter(joke => joke.id !== action.payload)};
        case REMOVE_JOKES:
            return {...state, jokes: []};
        default:
            return state;
    }
};

export const setJoke = payload => ({type: SET_JOKE, payload});
export const addJoke = payload => ({type: ADD_JOKE, payload});
export const setManyJokes = payload => ({type: SET_MANY_JOKES, payload});
export const addManyJokes = payload => ({type: ADD_MANY_JOKES, payload});
export const removeJoke = payload => ({type: REMOVE_JOKE, payload});
export const removeJokes = () => ({type: REMOVE_JOKES});