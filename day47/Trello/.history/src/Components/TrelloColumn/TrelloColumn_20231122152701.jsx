import { useSelector } from "react-redux";
import clsx from "clsx";
import { useState } from "react";
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
     const handleRemoveColumn = () => {
          const newListTasks = listTasks.filter(task => {
               return !tasks.find(({ _id }) => _id === task._id)
          })
          const newTotalTasks = newListTasks.map((task) => {
               const itemsColumn = listColumn.find(itemColumn => itemColumn?.column === task?.column);
               const { column, content } = task;
               return { column, content, columnName: itemsColumn?.columnName };
          })
          dispatch(fetchPostTasks(localStorage.getItem("apiKey"), newTotalTasks, "removeColumn"), _id);

     }
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
                                                  <div className={clsx(styles.columnContent)}>
                                                       {!isEditContent
                                                            ?
                                                            <h3 className={clsx(styles.headingLv3)}
                                                            >
                                                                 {columnName}
                                                            </h3>
                                                            : (
                                                                 <form className={styles.formColumnName}>
                                                                      <textarea
                                                                           name="name"
                                                                           id="name"
                                                                           value={columnName}
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
