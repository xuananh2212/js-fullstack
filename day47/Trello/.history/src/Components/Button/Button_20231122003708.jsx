import React, { useCallback } from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosAddCircleOutline } from "react-icons/io";
import { fetchAddTasks } from '../../Redux/middlewares/api';
import { v4 as uuidv4 } from 'uuid';
export default function Button({ type, itemColumn = {} }) {
     const dispatch = useDispatch();
     const listTasks = useSelector((state) => state.totalTasks.tasks);
     const listColumn = useSelector((state) => state.list.listColumn);
     const { _id, column, columnName } = itemColumn;
     const handleAddTask = useCallback(
          () => {
               const newTotalTasks = listTasks.map((task) => {
                    const itemsColumn = listColumn.find(itemColumn => itemColumn.column === task.column
                    );
                    console.log(itemsColumn);
                    const { column, content } = task;
                    return { column, content, columnName: itemsColumn.columnName };
               })
               const newTask = {
                    column,
                    columnName,
                    content: `Task ${listTasks.length}`,
               }
               dispatch(fetchAddTasks(localStorage.getItem("apiKey"), [...newTotalTasks, newTask], { ...newTask, _id: uuidv4() }, _id));
          }
          , []);
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