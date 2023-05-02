import React from "react";
import { useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes/index";

const AppRouter = () => {
    const isAuth = useSelector(state => state.auth.isAuth);
    return (
        <Routes>
            {isAuth ?
                privateRoutes.map(route =>
                    <Route 
                        path={route.path} 
                        element={route.element}
                        key={route.path}
                    />
                )
                :
                publicRoutes.map(route =>
                    <Route 
                        path={route.path} 
                        element={route.element}
                        key={route.path}
                    />
                )
            }
        </Routes>
    );
};

export default AppRouter;