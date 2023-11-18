import { useSelector, useDispatch } from "react-redux";
import { fetchGetApi } from "./redux/Slice/trelloListSlice";
function App() {
  const dispatch = useDispatch();
  useDispatch(() => {
    dispatch(fetchGetApi());
  })

  return (
    <>
      <h1>Hello trello</h1>
    </>
  )
}

export default App
