import { useSelector } from "react-redux";
import clsx from "clsx";
import { useState } from "react";
import styles from './TrelloColumn.module.scss'
export default function TrelloColumn({ column }) {
     const { _id, tasks, columnName } = column;
     const [isEditContent, setIsEditContent] = useState(false);

     return (
          <div className={clsx(styles.items)}>

          </div>
     )
}
