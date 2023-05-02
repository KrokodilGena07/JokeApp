import Error from "../pages/Error";
import JokeList from "../pages/JokeList";
import Login from "../pages/Login";
import Main from "../pages/Main";

export const publicRoutes = [
    {path: '/', element: <Main/>},
    {path: '/login', element: <Login/>},
    {path: '*', element: <Error/>}
];

export const privateRoutes = [
    {path: '/', element: <JokeList/>},
    {path: '/main', element: <Main/>},
    {path: '/jokes', element: <JokeList/>},
    {path: '*', element: <Error/>}
];