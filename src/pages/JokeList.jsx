import React from "react";
import HeaderLogo from "../components/HeaderLogo";
import MyButton from "../components/UI/button/MyButton";
import { fetchJoke, fetchJokes, fetchNewJoke, fetchNewJokes } from "../store/asyncActions/jokes";
import { useDispatch, useSelector } from "react-redux";
import JokeItem from "../components/JokeItem";
import {setIsAuth} from "../store/reducers/authReducer";
import { useNavigate } from "react-router-dom";
import "../styles/JokeList.css";
import { removeJokes } from "../store/reducers/jokeReducer";

const JokeList = () => {
    const jokes = useSelector(state => state.joke.jokes);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logout = () => {
        dispatch(setIsAuth(false));
        localStorage.removeItem("IsAuth");
        navigate('/');
        dispatch(removeJokes());
    };

    return (
        <div className="PageFont">
            <header className="MainPageHeader JokeHeader">
                <HeaderLogo path="/main"/>
                <div className="HeaderBtnList">
                    <MyButton onClick={() => dispatch(fetchNewJoke())}>
                        New Joke
                    </MyButton>
                    <MyButton onClick={() => dispatch(fetchJoke())}>
                        Again Joke
                    </MyButton>
                    <div className="HeaderLine"/>
                    <MyButton onClick={() => dispatch(fetchNewJokes())}>
                        New 10 Jokes
                    </MyButton>
                    <MyButton onClick={() => dispatch(fetchJokes())}>
                        Again 10 Jokes
                    </MyButton>
                    <div className="HeaderLine"/>
                    <MyButton onClick={() => logout()}>
                        Sign out
                    </MyButton>
                </div>
            </header>
            <main className="JokeList">
                {jokes.map((joke, index) =>
                    <JokeItem key={`${joke.id}_${index}`} joke={joke}/>
                )}
            </main>
        </div>
    );
};

export default JokeList;