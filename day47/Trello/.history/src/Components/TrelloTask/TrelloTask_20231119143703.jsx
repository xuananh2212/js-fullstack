import React from 'react';
import clsx from 'clsx';
import styles from './TrelloTask.module.scss';
import { Draggable } from 'react-beautiful-dnd';

export default function TrelloTask({ task, index }) {
     const { _id, content } = task;
     console.log(task._id);
     return (
          <Draggable draggableId={_id} index={index}>
               {
                    provider => (
                         <div
                              ref={provider.innerRef}
                              {...provider.dragHandleProps}
                              {...provider.draggableProps}
                              className={styles.task}>
                              {content}
                         </div>
                    )
               }
          </Draggable>

     )
}
