import React from "react";
import svg from "../svg/close-icon.svg";
import { useDispatch } from "react-redux";
import { removeJoke } from "../store/reducers/jokeReducer";

const JokeItem = ({joke}) => {
    const dispatch = useDispatch();
    return (
        <div className="JokeItem">
            <div>
                <h1 className="JokeItemHead">
                    {joke.setup}
                </h1>
                <h2>
                    {joke.punchline}
                </h2>
            </div>
            <div
                onClick={() => dispatch(removeJoke(joke.id))}
                className="JokeItemRemoveText"
            >
                <img src={svg} alt="remove" />
            </div>
        </div>
    );
};

export default JokeItem;