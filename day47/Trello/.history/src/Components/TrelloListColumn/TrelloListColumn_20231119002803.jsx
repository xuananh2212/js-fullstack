
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
                              <>
                                   <TrelloColumn
                                        key={itemColumn._id}
                                        itemColumn={itemColumn} />
                                   <Button type="task" />
                              </>
                         ))
                    }
               </div>
          </div>
     )
}
