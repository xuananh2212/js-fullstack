
export default function FormAddTodo({ handleAddTodo }) {
     console.log(handleAddTodo);
     return (
          <form action="" className='form-todos' onSubmit={(e) => handleAddTodo(e)}>
               <div className="form-group">
                    <input type="text" placeholder='Thêm một việc làm mới' id="text-new-todo" />
                    <button className='btn btn-add'>Thêm mới</button>
               </div>
          </form>
     )
}

