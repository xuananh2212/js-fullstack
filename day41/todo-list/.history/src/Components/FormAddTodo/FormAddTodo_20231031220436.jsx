import "./formAddTodo.css"
import { getApiKeyCookie } from "../../App";
import { useState, useRef } from "react"
export default function FormAddTodo({ handleAddTodo, getList }) {
     const [keyWord, setKeyword] = useState("");
     const timeOutRef = useRef(null);

     const handleSearch = (e) => {
          var value = e.target.value;
          if (timeOutRef.current) {
               clearTimeout(timeOutRef.current);
          }
          timeOutRef.current = setTimeout(() => {
               setKeyword(value);
               const queryString = new URLSearchParams({ q: value }).toString();
               var url = `/todos?${queryString}`
               getList(getApiKeyCookie(), url)
          }, 800)

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