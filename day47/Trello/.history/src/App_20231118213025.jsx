import { useSelector, useDispatch } from "react-redux";
import { fetchApiEmail } from "./Redux/middlewares/api";
import { useEffect } from "react";
import { TrelloList } from './Components/TrelloList'
import Login from "./Components/Login/Login";
function App() {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.trelloApi.isLogin);
  return (
    <>
      {!isLogin ? <Login /> : <TrelloList />}

    </>
  )
}

export default App
