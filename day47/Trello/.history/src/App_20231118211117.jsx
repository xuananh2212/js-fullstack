import { useSelector, useDispatch } from "react-redux";
import { fetchApiEmail } from "./Redux/middlewares/api";
import { useEffect } from "react";
import Login from "./Components/Login/Login";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApiEmail("xuantuananh2212@gmail.com"));
  })

  return (
    <>
      <Login />
    </>
  )
}

export default App
