import { useSelector, useDispatch } from "react-redux";
import { fetchApiEmail } from "./Redux/middlewares/apiEmail";
import { useEffect } from "react";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchApiEmail("xuantuananh2212@gmail.com"));
  })

  return (
    <>
      <h1>Hello trello</h1>
    </>
  )
}

export default App
