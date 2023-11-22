
import { useSelector } from 'react-redux';
import TrelloColumn from '../TrelloColumn/TrelloColumn';
import styles from './TrelloListColumn.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { getList, dragHanppened } from '../../Redux/action/listComlumnAction';
import { fetchPostTasks } from '../../Redux/middlewares/api';

export default function TrelloListColumn() {
     const listColumn = useSelector((state) => state.list.listColumn);
     const listTasks = useSelector((state) => state.totalTasks.tasks);
     const dispatch = useDispatch();
     const handOnDragEnd = (result) => {
          const { destination, source, draggableId, type } = result;
          if (!destination) {
               return;
          }
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
          if (source.droppableId !== destination.droppableId) {
               const columnFind = listColumn.find(column => column._id === destination.droppableId);
               const totalTasks = JSON.parse(JSON.stringify(listTasks));
               const taskFind = totalTasks.find(task => task._id === draggableId);
               taskFind.column = columnFind.column;
               taskFind.columnName = columnFind.columnName;
               const newTotalTask = totalTasks.map(({ column, columnName, content }) => ({ column, columnName, content }))
               dispatch(fetchPostTasks(localStorage.getItem("apiKey"), newTotalTask, "switchTask"));

          }



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
                                             listColumn.length > 0 &&
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