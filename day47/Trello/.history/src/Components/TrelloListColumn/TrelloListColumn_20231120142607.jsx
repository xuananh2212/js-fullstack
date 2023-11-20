
import { useSelector } from 'react-redux';
import TrelloColumn from '../TrelloColumn/TrelloColumn';
import styles from './TrelloListColumn.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import { DragDropContext } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';

export default function TrelloListColumn() {
     const listColumn = useSelector((state) => state.list.listColumn);
     const dispatch = useDispatch();
     const handOnDragEnd = (result) => {
          const { destination, source, draggableId } = result;
          dispatch({
               type: "drag/hanppened",
               payload: {
                    droppableIdStart: source.droppableId,
                    droppableIdEnd: destination.droppableId,
                    droppableIndexStart: source.index,
                    droppableIndexEnd: destination.index,
                    draggableId: draggableId

               }
          })



     }
     return (
          <DragDropContext onDragEnd={handOnDragEnd}>
               <div className={clsx(styles.container)}>
                    <div className={clsx(styles.listColumn)}>
                         {
                              listColumn.length &&
                              listColumn.map((itemColumn) => (
                                   <div
                                        key={itemColumn._id}
                                        className={styles.itemColumnWrap}
                                   >
                                        <TrelloColumn
                                             itemColumn={itemColumn} />
                                        <Button
                                             itemColumn={itemColumn}
                                             type="task" />
                                   </div>
                              ))
                         }
                         <Button type='column' />
                    </div>
               </div>
          </DragDropContext>
     )
}
