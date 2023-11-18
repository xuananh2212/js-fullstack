import { useSelector, useDispatch } from "react-redux";
import { TrelloList } from './Components/TrelloList';
import { }
import Login from "./Components/Login/Login";
import { useLayoutEffect } from "react";
function App() {
  const dispatch = useDispatch();
  const isLogin = useSelector((state) => state.trelloApi.isLogin);
  useLayoutEffect(() => {
    dispatch()
  }, []);
  return (
    <>
      {!isLogin ? <Login /> : <TrelloList />}

    </>
  )
}

export default App
