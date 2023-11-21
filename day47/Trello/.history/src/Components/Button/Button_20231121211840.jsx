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
     const { _id, column, columnName } = itemColumn;
     console.log(_id);
     const handleAddTask = () => {
          const newTotalTasks = listTasks.map((task) => {
               const itemsColumn = listColumn.find(itemColumn => {
                    console.log(itemColumn, task.column);
                    return itemColumn.column === task.column
               });
               console.log(itemsColumn);
               const { column, content } = task;
               return { column, content, columnName: itemsColumn.columnName };
          })
          const newTask = {
               column,
               columnName,
               content: `task${listTasks.length}`,
          }
          dispatch(fetchPostTasks(localStorage.getItem("apiKey"), [...newTotalTasks, newTask], newTask, _id))

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
