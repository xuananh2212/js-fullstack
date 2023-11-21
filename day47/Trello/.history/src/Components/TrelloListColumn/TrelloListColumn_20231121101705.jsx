
import { useSelector } from 'react-redux';
import TrelloColumn from '../TrelloColumn/TrelloColumn';
import styles from './TrelloListColumn.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { getList, dragHanppened } from '../../Redux/action/listComlumnAction';

export default function TrelloListColumn() {
     const listColumn = useSelector((state) => state.list.listColumn);
     const dispatch = useDispatch();
     const handOnDragEnd = (result) => {
          const { destination, source, draggableId, type } = result;
          if (!destination) {
               return;
          }
          /*
          {
               type: "drag/hanppened",
               payload: {
                    droppableIdStart: source.droppableId,
                    droppableIdEnd: destination.droppableId,
                    droppableIndexStart: source.index,
                    droppableIndexEnd: destination.index,
                    draggableId: draggableId,
                    type,

               }
          }
          */
          dispatch(
               dragHanppened({
                    droppableIdStart: source.droppableId,
                    droppableIdEnd: destination.droppableId,
                    droppableIndexStart: source.index,
                    droppableIndexEnd: destination.index,
                    draggableId: draggableId,
                    type,

               })
          )



     }
     return (
          <DragDropContext onDragEnd={handOnDragEnd}>
               <div className={clsx(styles.container)}>
                    <Droppable droppableId="all-listColumn" direction="horizontal" type='list'>
                         {
                              provided => (
                                   <div
                                        {...provided.droppableProps}
                                        ref={provided.innerRef}
                                        className={clsx(styles.listColumn)}>
                                        {
                                             listColumn.length &&
                                             listColumn.map((itemColumn, index) => (
                                                  <div
                                                       key={itemColumn._id}
                                                       className={clsx(styles.itemColumnWrap)}
                                                  >
                                                       <TrelloColumn
                                                            itemColumn={itemColumn}
                                                            index={index}
                                                       />

                                                  </div>
                                             ))
                                        }
                                        <Button type='column' />

                                   </div>
                              )
                         }

                    </Droppable>
               </div>
          </DragDropContext>
     )

}