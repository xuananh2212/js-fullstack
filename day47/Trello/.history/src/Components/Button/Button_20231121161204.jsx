import React from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosAddCircleOutline } from "react-icons/io";
import { fetchPostTasks } from '../../Redux/middlewares/api';
export default function Button({ type, itemColumn = {} }) {
     const dispatch = useDispatch();
     const listTasks = useSelector((state) => state.totalTasks.tasks);
     const listColumn = useSelector((state) => state.list.listColumn);
     console.log(listTasks);
     const { _id, column, columnName, tasks } = itemColumn;
     const handleAddTask = () => {
          const newTotalTasks = listTasks.map((task) => {
               const itemsColumn = listColumn.find(itemColumn => itemColumn.column === task.column);
               const { column, content } = task;
               return { column, content, columnName: itemsColumn.columnName };
          })


          const taskNew = {
               column,
               columnName,
               content: `task${listTasks.length}`,
          }
          dispatch(fetchPostTasks(localStorage.getItem("apiKey"), [{ ...newTotalTasks, taskNew }], _id))

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
