
import { useSelector } from 'react-redux';
import TrelloColumn from '../TrelloColumn/TrelloColumn';
import styles from './TrelloListColumn.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';

export default function TrelloListColumn() {
     const listColumn = useSelector((state) => state.list.listColumn);
     return (
          <div className={clsx(styles.container)}>
               <div className={clsx(styles.listColumn)}>
                    {
                         listColumn.length &&
                         listColumn.map((itemColumn) => (
                              <div
                                   className={styles.itemColumnWrap
                                        key={itemColumn._id}
                                   }>
                    <TrelloColumn

                         itemColumn={itemColumn} />
                    <Button type="task" />
               </div>
               ))
                    }
          </div>
          </div >
     )
}
