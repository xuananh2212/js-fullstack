import React from 'react';
import clsx from 'clsx';
import styles from './TrelloTask.module.scss';
import { Draggable } from 'react-beautiful-dnd';

export default function TrelloTask({ task }) {
     const { content } = task;
     return (
          <Draggable> <div className={styles.task}>{content}</div></Draggable>

     )
}
