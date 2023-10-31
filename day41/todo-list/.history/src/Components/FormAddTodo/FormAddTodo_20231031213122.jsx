import "./formAddTodo.css"
export default function FormAddTodo({ handleAddTodo }) {


     const handleSearch = () => {

     }
     return (
          <form
               autoComplete="true"
               action=""
               className='form-todos'
               onSubmit={(e) => handleAddTodo(e)}
          >
               <div
                    className="form-group"
               >
                    <input
                         type="text"
                         placeholder='Thêm một việc làm mới hoặc tìm kiếm'
                         id="text-new-todo"
                         onChange={handleSearch}
                    />
                    <button
                         className='btn btn-add'
                    >
                         Thêm mới
                    </button>
               </div>
          </form>
     )
}