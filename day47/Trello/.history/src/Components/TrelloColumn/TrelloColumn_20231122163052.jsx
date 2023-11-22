import { useSelector } from "react-redux";
import clsx from "clsx";
import { useState, useCallback, useRef } from "react";
import styles from './TrelloColumn.module.scss';
import TrelloTask from '../TrelloTask/TrelloTask';
import { Droppable, Draggable } from "react-beautiful-dnd";
import Button from "../Button/Button";
import { FaTrashCan } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { fetchPostTasks } from "../../Redux/middlewares/api";
export default function TrelloColumn({ itemColumn, index }) {
     const { _id, tasks, columnName, column } = itemColumn;
     const dispatch = useDispatch();
     const [isEditContent, setIsEditContent] = useState(false);
     const listTasks = useSelector(state => state.totalTasks.tasks);
     const listColumn = useSelector(state => state.list.listColumn);
     const [valueCurrentText, setValueCurrentText] = useState(columnName);
     const timeOutRef = useRef(null);
     const handleRemoveColumn = () => {
          if (tasks.length > 0) {
               const newListTasks = listTasks.filter(task => {
                    return !tasks.find(({ _id }) => _id === task._id)
               })
               const newTotalTasks = newListTasks.map((task) => {
                    const itemsColumn = listColumn.find(itemColumn => itemColumn?.column === task?.column);
                    const { column, content } = task;
                    return { column, content, columnName: itemsColumn?.columnName };
               })
               dispatch(fetchPostTasks(localStorage.getItem("apiKey"), newTotalTasks, "removeColumn", _id));
          } else {
               dispatch({
                    type: "list/removeColumn",
                    payload: _id
               })
          }

     }
     const handleDoubleClick = () => {
          setIsEditContent(true);

     }
     const handleOnBlur = () => {
          setIsEditContent(false);
     }
     const handleChange = useCallback((e) => {
          setValueCurrentText(value);
          var value = e.target.value;
          if (timeOutRef.current) {
               clearTimeout(timeOutRef.current);
          }
          timeOutRef.current = setTimeout(() => {
               const newListTasks = JSON.parse(JSON.stringify(listTasks));
               const newTasks = tasks.map(({ _id, content }) => ({ _id, column, columnName: value, content }));
               console.log(newTasks, newListTasks);
               const newTotalTasks = newListTasks.map(({ column, columnName, content, _id }) => {
                    const taskFind = newTasks.find(newTask => newTask._id === _id);
                    if (taskFind) {
                         const { column, columnName, content } = taskFind;
                         return { column, columnName, content }
                    } else {
                         return { column, columnName, content };
                    }
               })
               dispatch(fetchPostTasks(localStorage.getItem("apiKey"), newTotalTasks, "editContentColumn", _id, value));
          }, 800)
     }, []);
     return (
          <Draggable draggableId={_id} index={index}>
               {
                    provided => (
                         <div
                              ref={provided.innerRef}
                              {...provided.draggableProps}
                              {...provided.dragHandleProps}
                              className={clsx(styles.container)}>
                              <Droppable droppableId={_id}>
                                   {
                                        provided =>
                                        (
                                             <div
                                                  ref={provided.innerRef}
                                                  {...provided.droppableProps}
                                                  className={clsx(styles.column)}
                                             >
                                                  <div
                                                       onDoubleClick={handleDoubleClick}
                                                       className={clsx(styles.columnContent)}>
                                                       {!isEditContent
                                                            ?
                                                            <h3 className={clsx(styles.headingLv3)}
                                                            >
                                                                 {columnName}
                                                            </h3>
                                                            : (
                                                                 <form className={styles.formColumnName}>
                                                                      <textarea
                                                                           autoFocus
                                                                           onBlur={handleOnBlur}
                                                                           onChange={handleChange}
                                                                           name="name"
                                                                           id="name"
                                                                           value={valueCurrentText}
                                                                      ></textarea>
                                                                 </form>
                                                            )
                                                       }
                                                       <div className={clsx(styles.listTasks)}>
                                                            {
                                                                 tasks.length > 0 &&
                                                                 tasks.map((task, index) => (
                                                                      <TrelloTask
                                                                           key={task._id}
                                                                           task={task}
                                                                           index={index}
                                                                           column={column}
                                                                           columnName={columnName}
                                                                      />
                                                                 ))
                                                            }
                                                       </div>
                                                  </div>
                                                  <Button
                                                       itemColumn={itemColumn}
                                                       type="task" />
                                                  <div
                                                       className={styles.removeColumn}
                                                       onClick={handleRemoveColumn}
                                                  >
                                                       <FaTrashCan className={styles.icon} />
                                                  </div>
                                                  {provided.placeholder}

                                             </div>
                                        )
                                   }
                              </Droppable>
                         </div>

                    )
               }
          </Draggable>

     )
}
