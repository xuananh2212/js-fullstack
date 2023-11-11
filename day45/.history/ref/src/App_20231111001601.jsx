
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Theme from './Components/Theme/Theme';
import Content from './Components/Content/Content';
import FromNumber from './Components/FormNumber/FormNumber';
function App() {
  return (
    <div className='container'>
      <Theme />
      <Content />
      <FromNumber />
      <Button></Button>
      <ToastContainer autoClose={1000} />
    </div>

  )
}

export default App
