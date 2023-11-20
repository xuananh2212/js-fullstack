import { useSelector } from "react-redux";
import clsx from "clsx";
import { useState } from "react";
import styles from './TrelloColumn.module.scss';
import TrelloTask from '../TrelloTask/TrelloTask';
import { Droppable, Draggable } from "react-beautiful-dnd";
export default function TrelloColumn({ itemColumn, index }) {
     const { _id, tasks, columnName, column } = itemColumn;
     const [isEditContent, setIsEditContent] = useState(false);
     console.log(typeof _id, tasks, tasks.length);
     return (
          <Droppable droppableId={_id}>
               {
                    provided =>
                    (
                         <div
                              ref={provided.innerRef}
                              {...provided.droppableProps}
                              className={clsx(styles.column)}
                         >
                              {/* {console.log(provided.innerRef, { ...provided.droppableProps })} */}

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
                              {provided.placeholder}
                         </div>
                    )
               }
          </Droppable>
     )
}
