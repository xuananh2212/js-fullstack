import React from 'react';
import clsx from 'clsx';
import styles from './TrelloTask.module.scss'

export default function TrelloTask({ task }) {
     const { content } = task;
     return (
          <div className={styles.task}>{content}</div>

     )
}
