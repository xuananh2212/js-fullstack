import { useSelector, useDispatch } from "react-redux";
import TrelloList from './Components/TrelloColumn/TrelloColumn';
import { fetchApiEmail } from './Redux/middlewares/api'
import Login from "./Components/Login/Login";
import { useLayoutEffect } from "react";
import TrelloListColumn from "./Components/TrelloListColumn/TrelloListColumn";
function App() {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.trelloApi.isLogin);
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
