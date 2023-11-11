import useSelector from '../../Core/useSelector';
import MAX_TIME from '../../Utils/Config';

import './Content.scss'
export default function Content() {
     const { state: { remaining } } = useSelector();
     return (
          <>
               <h2 className='title'>Chào mừng bạn đến với trò chơi đoán số</h2>
               <span className='remaining'>số lần còn lại: {`${remaining}/${MAX_TIME}`}</span>
               <p className='desc'>Bạn Cần tìm kiếm một số từ 1 đến 99</p>
          </>
     )
}
