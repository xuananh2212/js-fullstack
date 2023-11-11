import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Theme from './Components/Theme/Theme';
import Content from './Components/Content/Content';
import FromNumber from './Components/FormNumber/FormNumber';
import useSelector from './Core/useSelector';
function App() {
  const { state: { remaining } } = useSelector();
  return (
    <div className='container'>
      <Theme />
      <Content />
      <FromNumber styles={remaining === 0 && { display: "none" }} />
      <button styles={remaining !== 0 && { display: "none" }}>Chơi lại</button>
      <ToastContainer autoClose={1000} />
    </div>

  )
}

export default App
