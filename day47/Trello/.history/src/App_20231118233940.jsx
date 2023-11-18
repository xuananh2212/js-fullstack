import { useSelector, useDispatch } from "react-redux";
import { fetchApiEmail } from './Redux/Middlewares/api';
import Login from "./Components/Login/Login";
import { useLayoutEffect } from "react";
import TrelloListColumn from "./Components/TrelloListColumn/TrelloListColumn";
function App() {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.api.isLogin);
  useLayoutEffect(() => {
    dispatch(fetchApiEmail(localStorage.getItem('apiKey')));
  }, []);
  return (
    <>
      {!isLogin ? <Login /> : <TrelloListColumn />}

    </>
  )
}

export default App
