import useSelector from '../../Core/useSelector';
import MAX_TIME from '../../Utils/Config';
export default function Content() {
     const { state: { remaining } } = useSelector();
     return (
          <>
               <h2 className='title'>Chào mừng bạn đến với trò chơi đoán số</h2>
               <span className='remaining'>số lần còn lại:{`${remaining}/${MAX_TIME}`}  </span>
          </>
     )
}
