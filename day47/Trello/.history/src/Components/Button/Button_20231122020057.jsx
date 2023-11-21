import React, { useCallback } from 'react';
import styles from './Button.module.scss';
import clsx from 'clsx';
import { useDispatch, useSelector } from 'react-redux';
import { IoIosAddCircleOutline } from "react-icons/io";
import { fetchPostTasks } from '../../Redux/middlewares/api';
import { v4 as uuidv4 } from 'uuid';
export default function Button({ type, itemColumn = {} }) {
     const dispatch = useDispatch();
     const listTasks = useSelector((state) => state.totalTasks.tasks);
     const listColumn = useSelector((state) => state.list.listColumn);
     const { column, columnName } = itemColumn;
     const handleAddTask = useCallback(
          () => {
               const newTotalTasks = listTasks.map((task) => {
                    const itemsColumn = listColumn.find(itemColumn => itemColumn.column === task.column
                    );
                    const { column, content } = task;
                    return { column, content, columnName: itemsColumn.columnName };
               })
               const newTask = {
                    column,
                    columnName,
                    content: `Task ${listTasks.length}`,
               }
               dispatch(fetchPostTasks(localStorage.getItem("apiKey"), [...newTotalTasks, newTask], "add"));
          }
          , []);
     const handleAddColumn = useCallback(() => {
          console.log(uuidv4());
          dispatch({
               type: "list/addColumn",
               payload: { _id: uuidv4(), columnName: `column ${listColumn.length + 1}`, column: String(+listColumn[listColumn.length - 1].column + 1), tasks: [] }
          })
     }, []);
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
                              onClick={handleAddColumn}
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
