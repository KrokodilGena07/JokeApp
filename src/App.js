import React, {useEffect} from "react";
import AppRouter from "./components/AppRouter";
import "./styles/Error.css";
import "./styles/App.css";
import { useDispatch } from "react-redux";
import { setIsAuth } from "./store/reducers/authReducer";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (localStorage.getItem("isAuth")) {
      dispatch(setIsAuth(true));
    }
  });

  return (
    <div className="App">
      <AppRouter/>
    </div>
  );
};

export default App;
