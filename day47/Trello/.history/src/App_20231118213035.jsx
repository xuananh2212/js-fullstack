import { useSelector, useDispatch } from "react-redux";
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
