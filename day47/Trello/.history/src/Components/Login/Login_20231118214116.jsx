import { useState } from 'react';
import styles from './Login.module.scss';
import clsx from 'clsx';
export default function Login() {
     const [content, setContent] = useState("");
     const handleChangeValueInput = (e) => {
          setContent(e.target.value);
     }
     const handleSubmit = (e) => {
          e.preventDefault();
     }

     return (
          <div className={clsx(styles.container)}>
               <h2 className={clsx(styles.headingLv2)}>
                    Enter the Email!
               </h2>
               <form
                    onSubmit={handleSubmit}
                    className={clsx(styles.formEmail)}>
                    <div className={clsx(styles.groupFrom)}>
                         <input
                              onChange={handleChangeValueInput}
                              type="text"
                              name='email'
                              value={content}
                         />
                    </div>
               </form>
          </div>
     )
}
