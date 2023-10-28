export default function Todo({ todo, isEmpty, key, handleDeleteTodo }) {
     console.log(key);
     return (
          <li>
               <p className="desc">{todo}</p>
               <div className="btn-group">
                    {!isEmpty &&
                         (<>
                              <button className="btn btn-update">Sửa</button>
                              <button
                                   className="btn btn-remove"
                                   onClick={() => handleDeleteTodo(key)}>
                                   Xoá
                              </button></>
                         )
                    }
               </div>
          </li>
     )
}
