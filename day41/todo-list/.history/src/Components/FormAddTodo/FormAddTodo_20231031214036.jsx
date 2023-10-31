import "./formAddTodo.css"
import { useState, useRef } from "react"
export default function FormAddTodo({ handleAddTodo, getList }) {
     const [keyWord, setKeyword] = useState("");
     const timoutRef = useRef(null);

     const handleSearch = (e) => {
          if (time)

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