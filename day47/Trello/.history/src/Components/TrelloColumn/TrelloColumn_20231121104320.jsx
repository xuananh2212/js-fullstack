import { useSelector } from "react-redux";
import clsx from "clsx";
import { useState } from "react";
import styles from './TrelloColumn.module.scss';
import TrelloTask from '../TrelloTask/TrelloTask';
import { Droppable, Draggable } from "react-beautiful-dnd";
import Button from "../Button/Button";
export default function TrelloColumn({ itemColumn, index }) {
     const { _id, tasks, columnName, column } = itemColumn;
     const [isEditContent, setIsEditContent] = useState(false);
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
                                                                 tasks.length &&
                                                                 tasks.map((task, index) => (
                                                                      <TrelloTask
                                                                           key={task._id}
                                                                           task={task}
                                                                           index={index}
                                                                      />
                                                                 ))
                                                            }
                                                       </div>
                                                  </div>
                                                  <Button
                                                       itemColumn={itemColumn}
                                                       type="task" />
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
