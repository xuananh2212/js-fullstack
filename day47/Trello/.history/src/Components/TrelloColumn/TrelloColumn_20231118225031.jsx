import { useSelector } from "react-redux";
import clsx from "clsx";
import { useState } from "react";
import styles from './TrelloColumn.module.scss'
export default function TrelloColumn({ itemColumn }) {
     const { _id, tasks, columnName, column } = itemColumn;
     const [isEditContent, setIsEditContent] = useState(false);

     return (
          <div className={clsx(styles.column)}>

          </div>
     )
}
