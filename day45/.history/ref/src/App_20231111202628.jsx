import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Theme from './Components/Theme/Theme';
import Content from './Components/Content/Content';
import FromNumber from './Components/FormNumber/FormNumber';
import useSelector from './Core/useSelector';
import Button from './Components/Button/Button';
import ListPlays from './Components/ListPlays/ListPlays';
import Process from './Components/Process/Process';
function App() {
  const { state: { remaining } } = useSelector();
  return (
    <div
      className='container'
      style={{ padding: 20 }}
    >
      <Process />
      <Theme />
      <Content />
      {remaining === 0 ? <Button /> : (
        <FromNumber />
      )}
      <ListPlays />
      <ToastContainer
        autoClose={1000}
      />
    </div>

  )
}

export default App
