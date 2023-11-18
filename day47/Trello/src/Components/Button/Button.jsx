import React from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';
import { IoIosAddCircleOutline } from "react-icons/io";
export default function Button({ type }) {
     return (
          <>
               {
                    type === "task" ?
                         (<button
                              className={clsx(styles.btnAddTasks)}
                         >
                              <IoIosAddCircleOutline />
                              Add {type}
                         </button>
                         )
                         :
                         (<button
                              className={clsx(styles.btnAddColumn)}
                         >
                              <IoIosAddCircleOutline />
                              Add {type}
                         </button>
                         )

               }
          </>
     )
}
