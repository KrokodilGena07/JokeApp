import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="Page">
            <header className="PageHeader">
                Page not found
            </header>
            <Link
                className="ErrorLink"
                to="/"
            >
                <h1>
                    TO MAIN
                </h1>
            </Link>
        </div>
    );
};

export default Error;