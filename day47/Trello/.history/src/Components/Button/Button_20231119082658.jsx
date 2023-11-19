import React from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { IoIosAddCircleOutline } from "react-icons/io";
export default function Button({ type, itemColumn = {} }) {
     const dispatch = useDispatch();
     const { _id, column, columnName, tasks } = itemColumn;
     console.log(itemColumn);
     const handleAddTask = () => {
          const taskNew = {
               column,
               columnName,
               "content": `task${tasks.length}`,

          }

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
