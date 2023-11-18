import { useSelector, useDispatch } from "react-redux";
import TrelloList from './Components/TrelloList/TrelloList';
import { fetchApiEmail } from './Redux/middlewares/api'
import Login from "./Components/Login/Login";
import { useLayoutEffect } from "react";
function App() {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.trelloApi.isLogin);
  useLayoutEffect(() => {
    dispatch(fetchApiEmail(localStorage.getItem('apiKey')));
  }, []);
  return (
    <>
      {!isLogin ? <Login /> : <TrelloList />}

    </>
  )
}

export default App