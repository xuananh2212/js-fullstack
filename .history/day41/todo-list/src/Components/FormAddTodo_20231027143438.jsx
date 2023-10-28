
export default function FormAddTodo(handleAddTodo) {
     return (
          <form action="" className='form-todos'>
               <div className="form-group">
                    <input type="text" placeholder='thêm một việc làm mới' />
                    <button className='btn btn-add' onClick={handleAddTodo}>Thêm mới</button>
               </div>
          </form>
     )
}

