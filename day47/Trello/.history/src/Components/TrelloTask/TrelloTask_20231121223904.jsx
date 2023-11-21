import React, { useCallback, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import styles from './TrelloTask.module.scss';
import { Draggable } from 'react-beautiful-dnd';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostTasks } from '../../Redux/middlewares/api';

export default function TrelloTask({ task, index }) {
     const { _id, content, isEdit } = task;
     const dispatch = useDispatch();
     const [valueCurrentText, setValueCurrentText] = useState(content);
     const [isEditTask, setIsEditTask] = useState(isEdit);
     const listTasks = useSelector((state) => state.totalTasks.tasks);
     const listColumn = useSelector((state) => state.list.listColumn);
     const timeOutRef = useRef(null);
     const handleChange = useCallback((e) => {
          var value = e.target.value;
          if (timeOutRef.current) {
               clearTimeout(timeOutRef.current);
          }
          timeOutRef.current = setTimeout(() => {
               const newTotalTasks = listTasks.map((task) => {
                    const itemsColumn = listColumn.find(itemColumn => itemColumn.column === task.column);
                    const { column, content } = task;
                    return { column, content, columnName: itemsColumn.columnName };
               })
               const newTask = {
                    column,
                    columnName,
                    content: value,
               }
               dispatch(fetchPostTasks(localStorage.getItem("apiKey"), [...newTotalTasks, newTask]))
          }, 800)
          setValueCurrentText(value);
     }, [])

     return (
          <Draggable
               draggableId={_id}
               index={index}>
               {
                    provider => (
                         isEdit
                              ?
                              <form
                                   ref={provider.innerRef}
                                   {...provider.dragHandleProps}
                                   {...provider.draggableProps}
                                   onSubmit={(e) => e.preventDefault()}
                                   className={clsx(styles.formTask)}>
                                   <textarea
                                        autoFocus
                                        onChange={handleChange}
                                        name="content-task"
                                        id="content-task"
                                        value={valueCurrentText}
                                   ></textarea>

                              </form>
                              :
                              (
                                   <div
                                        ref={provider.innerRef}
                                        {...provider.dragHandleProps}
                                        {...provider.draggableProps}
                                        className={styles.task}>
                                        <h3>{content}</h3>
                                   </div>
                              )
                    )
               }
          </Draggable>

     )
}
