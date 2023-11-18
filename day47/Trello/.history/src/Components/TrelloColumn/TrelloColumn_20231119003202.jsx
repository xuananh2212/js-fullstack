import { useSelector } from "react-redux";
import clsx from "clsx";
import { useState } from "react";
import styles from './TrelloColumn.module.scss';
import TrelloTask from '../TrelloTask/TrelloTask';
export default function TrelloColumn({ itemColumn }) {
     const { _id, tasks, columnName, column } = itemColumn;
     const [isEditContent, setIsEditContent] = useState(false);

     return (
          <div className={clsx(styles.column)}>
               {!isEditContent ?
                    <h3 className={clsx(styles.headingLv3)}>{columnName}</h3>
                    : (
                         <form className={styles.formColumnName}>
                              <textarea
                                   name="name"
                                   id="name"
                                   value={columnName}
                              ></textarea>
                         </form>
                    )}
               {
                    tasks.length && tasks.map(task => (
                         <TrelloTask key={task._id} task={task} />
                    ))
               }

          </div>
     )
}
