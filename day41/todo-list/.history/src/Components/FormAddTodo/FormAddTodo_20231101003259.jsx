import "./formAddTodo.css"
import { getApiKeyCookie } from "../../App";
import { useState, useRef } from "react";
import { toast } from 'react-toastify';
export default function FormAddTodo({ handleAddTodo, getList }) {
     const [keyWord, setKeyword] = useState("");
     const [isSearch, setIsSearch] = useState(false);
     const timeOutRef = useRef(null);

     const handleSearch = (e) => {
          if (isSearch) {
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
     }
     const handleClick = () => {
          var checkIsSearch = !isSearch;
          setIsSearch(checkIsSearch);
          toast.success(`${checkIsSearch ? "đang bật chế độ tìm kiếm" : "đã tắt chế độ tìm kiếm"}`)



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
                         placeholder='Thêm một việc làm mới'
                         id="text-new-todo"
                         onChange={handleSearch}
                    />
                    <div className="btn-group">
                         <button
                              className='btn btn-add'
                         >
                              Thêm mới
                         </button>
                         <button
                              type="button"
                              className={isSearch ? "btn btn-search isSearching" : "btn btn-search"}
                              onClick={handleClick}
                         >
                              Tìm Kiếm
                         </button>
                    </div>
               </div>
          </form>
     )
}