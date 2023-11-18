import React from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';
import { IoIosAddCircleOutline } from "react-icons/io";
export default function Button({ type }) {
     return (
          <div className={clsx(styles.btnAdd)}>
               {
                    type === "task" ?
                         (<button
                              className={clsx(styles.btnAddTasks)}
                         >

                         </button>
                         )
                         :
                         (<button
                              className={clsx(styles.btnAddTasks)}
                         >

                         </button>
                         )

               }
          </div>
     )
}
