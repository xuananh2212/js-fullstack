
export default function FormAddTodo(handleAddTodo) {
     return (
          <form action="" className='form-todos'>
               <div className="form-group">
                    <input type="text" placeholder='Thêm một việc làm mới' id="text-new-todo" />
                    <button className='btn btn-add' onClick={() => handleAddTodo(e)}>Thêm mới</button>
               </div>
          </form>
     )
}

