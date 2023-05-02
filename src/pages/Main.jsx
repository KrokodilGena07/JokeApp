import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Main.css";
import HeaderLogo from "../components/HeaderLogo";
import MyButton from "../components/UI/button/MyButton";
import { useDispatch, useSelector } from "react-redux";
import { fetchNewJoke } from "../store/asyncActions/jokes";
import JokeItem from "../components/JokeItem";

const Main = () => {
    const isAuth = useSelector(state => state.auth.isAuth);
    const jokes = useSelector(state => state.joke.jokes);
    const [warningText, setWarningText] = useState("");
    const dispatch = useDispatch();

    const getJoke = () => {
        if (isAuth) {
            dispatch(fetchNewJoke());
        } else {
            setWarningText("Log in to do this!");
        }
    };
    return (
        <div className="Main PageFont">
            <header className="MainPageHeader">
                <HeaderLogo/>
                <div className="HeaderBtnList">
                    <MyButton onClick={() => getJoke()}>
                        Joke
                    </MyButton>
                    <Link to="/jokes">
                        <MyButton>Jokes</MyButton>
                    </Link>
                    <div className="HeaderLine"/>
                    <Link to="/login">
                        <MyButton>Login</MyButton>
                    </Link>
                </div>
            </header>
            <main className="MainSection">
                <h1 className="MainText">
                    JokeApp is the best service for jokes!
                </h1>
                <div className="JokeList MainJoke">
                    {jokes.map((joke, index) =>
                        <JokeItem key={`${joke.id}_${index}`} joke={joke}/>
                    )}
                </div>
                <h1 className="WarningText">
                    {warningText}
                </h1>
            </main>
        </div>
    );
};

export default Main;