import styles from './Login.module.scss';
import clsx from 'clsx';
export default function Login() {
     return (
          <div className={clsx(styles.container)}>
               <form className={clsx(styles.formEmail)}>
                    <div className={clsx(styles.groupFrom)}>
                         <input type="text" name='email' />
                    </div>
               </form>
          </div>
     )
}
