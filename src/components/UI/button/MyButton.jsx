import React from "react";
import styles from "./MyBtn.module.css";

const MyButton = ({children, ...props}) => {
    return (
        <button 
            className={styles.MyBtn}
            {...props}
        >
            {children}
        </button>
    );
};

export default MyButton;