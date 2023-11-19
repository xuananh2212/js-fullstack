import React from 'react';
import clsx from 'clsx';
import styles from './TrelloTask.module.scss';
import { Draggable } from 'react-beautiful-dnd';

export default function TrelloTask({ task, index }) {
     const { _id, content } = task;
     console.log(task._id, index);
     return (
          <Draggable draggableId={_id} index={index}>
               {
                    provider => (
                         <div
                              ref={provider.innerRef}
                              {...provider.draggableProps}
                              {...provider.dragHandleProps}
                              className={styles.task}>
                              <h3>  {content}</h3>
                         </div>
                    )
               }
          </Draggable>

     )
}
