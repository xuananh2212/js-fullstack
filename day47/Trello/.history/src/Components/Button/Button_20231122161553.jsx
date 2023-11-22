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
               console.log(listTasks);
               const newTotalTasks = listTasks.map(({ column, content, columnName }) => ({ column, content, columnName }))
               const newTask = {
                    column,
                    content: `Task ${listTasks.length + 1}`,
                    columnName

               }
               dispatch(fetchPostTasks(localStorage.getItem("apiKey"), [...newTotalTasks, newTask], "addTask"));
          }
          , [listTasks]);
     const handleAddColumn = useCallback(() => {
          dispatch({
               type: "list/addColumn",
               payload: { _id: uuidv4(), columnName: `column ${listColumn.length + 1}`, column: `${listColumn.length > 0 ? String(+listColumn[listColumn.length - 1]?.column + 1) : 1}`, tasks: [] }
          })
     }, [listColumn]);
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
