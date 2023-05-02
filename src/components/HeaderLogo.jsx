import React from "react";
import { Link } from "react-router-dom";
import svg from "../svg/clown-icon.svg";

const HeaderLogo = ({path='/'}) => {
    return (
        <Link 
            className="MainPageHeaderLogo"
            to={path}
        >
            <img 
                src={svg}
                alt="Main"
            />
            <h1>
                JokeApp
            </h1>
        </Link>
    );
};

export default HeaderLogo;