import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Theme from './Components/Theme/Theme';
import Content from './Components/Content/Content';
import FromNumber from './Components/FormNumber/FormNumber';
import useSelector from './Core/useSelector';
import Button from './Components/Button/Button';
import ListPlays from './Components/ListPlays/ListPlays';
function App() {
  const { state: { remaining, listPlays } } = useSelector();
  console.log(remaining, listPlays);
  return (
    <div className='container' style={{ padding: 10 }}>
      <Theme />
      <Content />
      <ListPlays />
      <FromNumber />
      <Button />
      <ToastContainer autoClose={1000} />
    </div>

  )
}

export default App
