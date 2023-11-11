import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Theme from './Components/Theme/Theme';
import Content from './Components/Content/Content';
import FromNumber from './Components/FormNumber/FormNumber';
import useSelector from './Core/useSelector';
function App() {
  const { state: { remaining } } = useSelector();
  console.log(remaining);
  return (
    <div className='container'>
      <Theme />
      <Content />
      <FromNumber />

      <ToastContainer autoClose={1000} />
    </div>

  )
}

export default App
