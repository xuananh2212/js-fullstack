import { useSelector } from "react-redux";
import clsx from "clsx";
import { useState } from "react";
import styles from './TrelloColumn.module.scss';
import TrelloTask from '../TrelloTask/TrelloTask';
import { Droppable } from "react-beautiful-dnd";
export default function TrelloColumn({ itemColumn }) {
     const { _id, tasks, columnName, column } = itemColumn;
     const [isEditContent, setIsEditContent] = useState(false);
     console.log(typeof _id);
     return (
          <Droppable droppableId={_id}>
               {

                    provided => {

                         <div
                              ref={provided.innerRef}
                              {...provided.droppableProps}
                              className={clsx(styles.column)}
                         >

                              {!isEditContent
                                   ?
                                   <h3 className={clsx(styles.headingLv3)}>{columnName}</h3>
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
                                   tasks.length && tasks.map(task => (
                                        <TrelloTask key={task._id} task={task} />
                                   ))
                              }
                              {provided.placeholder}

                         </div>
                    }
               }
          </Droppable>
     )
}
