import React from "react";
import "../styles/Login.css";
import { useDispatch } from "react-redux";
import { setIsAuth } from "../store/reducers/authReducer";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const login = () => {
        dispatch(setIsAuth(true));
        navigate('/');
        localStorage.setItem("isAuth", "true");
    };

    return (
        <div className="Page">
            <header className="PageHeader">
                Login
            </header>
            <div className="LoginContainer">
                <form 
                    className="LoginForm"
                    onSubmit={() => login()}
                >
                    <input 
                        type="text"
                        className="LoginInput"
                    />
                    <input 
                        type="password" 
                        className="LoginInput"
                    />
                    <button className="LoginBtn">
                        send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;