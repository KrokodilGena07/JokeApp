import axios from "axios"
import { setJoke, addJoke, setManyJokes, addManyJokes } from "../reducers/jokeReducer";

export const fetchNewJoke = () => {
    return async (dispacth) => {
        const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
        dispacth(setJoke(response.data));
    }
}

export const fetchJoke = () => {
    return async (dispacth) => {
        const response = await axios.get("https://official-joke-api.appspot.com/random_joke");
        dispacth(addJoke(response.data));
    }
}

export const fetchNewJokes = () => {
    return async (dispacth) => {
        const response = await axios.get("https://official-joke-api.appspot.com/random_ten");
        dispacth(setManyJokes(response.data));
    }
}

export const fetchJokes = () => {
    return async (dispacth) => {
        const response = await axios.get("https://official-joke-api.appspot.com/random_ten");
        dispacth(addManyJokes(response.data));
    }
}

export const fetchJokeAction = (action, endpoint='random_joke') => {
    return async (dispacth) => {
        const response = await axios.get("https://official-joke-api.appspot.com/" + endpoint);
        dispacth(action(response.data));
    }
}