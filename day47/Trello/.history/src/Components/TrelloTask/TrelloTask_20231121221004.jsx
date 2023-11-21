import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import styles from './TrelloTask.module.scss';
import { Draggable } from 'react-beautiful-dnd';

export default function TrelloTask({ task, index }) {
     const { _id, content, isEdit } = task;
     const [valueCurrentText, setValueCurrentText] = useState("");
     const handleChange = (e) => {
          setValueCurrentText(e.target.value);
     }
     const handleSubmit = () => {

     }

     return (
          <Draggable
               draggableId={_id}
               index={index}>
               {
                    provider => (
                         isEdit ? <form
                              onSubmit={() => e.preventDefault()}}
               className={clsx(styles.formTask)}>
               <textarea
                    autoFocus
                    onChange={handleChange}
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
          </Draggable >

     )
}
