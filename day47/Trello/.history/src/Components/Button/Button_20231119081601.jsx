import React from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';
import { IoIosAddCircleOutline } from "react-icons/io";
export default function Button({ type, itemColumn = {} }) {
     const { _id } = itemColumn;
     const handleAddTask = () => {

     }
     return (
          <>
               {
                    type === "task" ?
                         (<button
                              onClick={handleAddTask}
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
