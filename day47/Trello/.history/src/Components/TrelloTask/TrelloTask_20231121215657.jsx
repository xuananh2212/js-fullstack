import React, { useEffect, useRef } from 'react';
import clsx from 'clsx';
import styles from './TrelloTask.module.scss';
import { Draggable } from 'react-beautiful-dnd';

export default function TrelloTask({ task, index }) {
     const { _id, content, isEdit } = task;
     console.log(isEdit)
     const valueTextArea = useRef(null);
     useEffect(() => {
          valueTextArea.autofocus;
     })
     return (
          <Draggable
               draggableId={_id}
               index={index}>
               {
                    provider => (
                         isEdit ? <form action="" className={clsx(styles.formTask)}>
                              <textarea
                                   ref={valueTextArea}
                                   name="content-task"
                                   id="content-task"
                                   value={content}
                              ></textarea>

                         </form> : (
                              <div
                                   ref={provider.innerRef}
                                   {...provider.dragHandleProps}
                                   {...provider.draggableProps}
                                   className={styles.task}>
                                   <h3>{content}</h3>
                              </div>
                         )
                    )
               }
          </Draggable>

     )
}
