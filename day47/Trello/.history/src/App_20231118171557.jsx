import { useSelector, useDispatch } from "react-redux";
import { fetchGetApi } from "./redux/Slice/apiSlice";
import { useEffect } from "react";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchGetApi("xuantuanan1h2212@gmail.com"));
  })

  return (
    <>
      <h1>Hello trello</h1>
    </>
  )
}

export default App
