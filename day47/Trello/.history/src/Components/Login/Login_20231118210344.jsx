import styles from './Login.module.scss';
import clsx from 'clsx';
export default function Login() {
     return (
          <div className='container'>
               <form className=''>
                    <div className="form-group">
                         <input type="text" name='email' />
                    </div>
               </form>
          </div>
     )
}
