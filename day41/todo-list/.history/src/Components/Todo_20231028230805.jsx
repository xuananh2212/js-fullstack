export default function Todo({ todo, isEmpty, id, handleDeleteTodo, handleUpdateTodo }) {
     console.log(todo);
     return (
          <li>
               <p className={todo.isCompleted ? "desc completed" : "desc not-completed"}>{todo}</p>
               <div className="btn-group">
                    {!isEmpty &&
                         (<>
                              <button
                                   className="btn btn-update"
                                   onClick={() => handleUpdateTodo(true, id, null)}
                              >
                                   Sửa
                              </button>
                              <button
                                   className="btn btn-remove"
                                   onClick={() => handleDeleteTodo(id)}
                              >
                                   Xoá
                              </button>
                         </>
                         )
                    }
               </div>
          </li>
     )
}
