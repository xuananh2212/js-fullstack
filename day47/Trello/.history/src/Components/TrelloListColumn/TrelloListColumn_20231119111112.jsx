
import { useSelector } from 'react-redux';
import TrelloColumn from '../TrelloColumn/TrelloColumn';
import styles from './TrelloListColumn.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import { DragDropContext } from 'react-beautiful-dnd';

export default function TrelloListColumn() {
     const listColumn = useSelector((state) => state.list.listColumn);
     const handOnDragEnd = () => {

     }
     return (
          <DragDropContext onDragEnd={handOnDragEnd}>
               <div className={clsx(styles.container)}>
                    <div className={clsx(styles.listColumn)}>
                         {
                              listColumn.length &&
                              listColumn.map((itemColumn) => (
                                   <div

                                   >
                                        <TrelloColumn
                                             key={itemColumn._id}
                                             className={styles.itemColumnWrap}
                                             itemColumn={itemColumn} />

                                   </div>
                              ))
                         }
                         <Button type='column' />
                    </div>
               </div>
          </DragDropContext>
     )
}
