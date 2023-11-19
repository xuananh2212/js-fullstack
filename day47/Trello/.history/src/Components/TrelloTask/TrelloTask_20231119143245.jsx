import React from 'react';
import clsx from 'clsx';
import styles from './TrelloTask.module.scss';
import { Draggable } from 'react-beautiful-dnd';
import { Provider } from 'react-redux';

export default function TrelloTask({ task, index }) {
     const { _id, content } = task;
     return (
          <Draggable draggableId={_id} index={index}>
               {
                    provider => (
                         <div className={styles.task}>
                              {content}
                         </div>
                    )
               }
          </Draggable>

     )
}
