export default function Todo({ todo, isEmpty, id, handleDeleteTodo, handleUpdateTodo }) {
     return (
          <li>
               <p className="desc">{todo}</p>
               <div className="btn-group">
                    {!isEmpty &&
                         (<>
                              <button
                                   className="btn btn-update"
                                   onClick={() => handleUpdateTodo(id)}
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
