import { toast } from 'react-toastify';
import { getApiKeyCookie } from '../App';
import { client } from './client';

export const apiUpdateTodo = async (id, newTodo, listTodos, handleStateUpdateLoading, handleStateUpdateTodos, handleStateUpdateEditTodo) => {
     var url = `/todos/${id}`;
     handleStateUpdateLoading(true);
     const { data } = await client.patch(url, newTodo, getApiKeyCookie());
     if (data.code === 200) {
          toast.success("cập nhật thành công");
          handleStateUpdateTodos(listTodos, null);
          handleStateUpdateEditTodo(null);
     } else {
          toast.error("Lỗi cập nhật thất bại!")
          getApiKey();
     }
     handleStateUpdateLoading(false);
}
export const apiDeleteTodo = async (id, newTodos, handleStateUpdateTodos, handleStateUpdateLoading) => {
     var url = `/todos/${id}`;
     handleStateUpdateLoading(true);
     const { data } = await client.delete(url, getApiKeyCookie());
     if (data.code === 200) {
          handleStateUpdateTodos(newTodos, null);
          toast.success("xoá thành công");
     } else {
          toast.error("xoá thất bại");
          getApiKey();
     }
     handleStateUpdateLoading(false);
}
export const apiAddTodo = async (todo, handleStateUpdateLoading, handleStateUpdateTodos) => {
     const apiKey = getApiKeyCookie();
     if (apiKey) {
          handleStateUpdateLoading(true);
          const { data } = await client.post("/todos", { todo }, apiKey);
          var todoNew = data.data;
          console.log(todoNew);
          if (data.code === 201) {
               const { data: dataList } = await client.get("/todos", null, apiKey);
               if (dataList.code === 200) {
                    const { listTodo } = dataList.data;
                    handleStateUpdateTodos(null, [todoNew, ...listTodo]);
                    toast.success("thêm thành công");
               } else {
                    getApiKey();
               }
          } else {
               toast.error("thêm thất bại , Nhập lại tên email!");
               setTimeout(() => {
                    getApiKey()
               }, 200)

          }
          handleStateUpdateLoading(false);
     } else {
          toast.error("email không tồn tại!");
          setTimeout(() => {
               getApiKey();
          }, 500)
     }

}
export const getApiKey = async (handleStateUpdateLoading, getList) => {
     var email = prompt('Please enter your email:?', "example@example.com");
     if (email) {
          var emailPath = email.replace(/@/g, "%40");
          const url = `/api-key?email=${emailPath}`;
          handleStateUpdateLoading(true);
          const { data } = await client.get(url);
          if (data.code === 200) {
               const { apiKey } = data.data;
               document.cookie = `apiKey=${apiKey}`;
               document.cookie = `email=${email}`;
               getList(getApiKeyCookie()).then((data) => {
                    if (data.code === 200) {
                         toast.success(`chào mừng bạn: ${email}`)

                    }
               })
          } else {
               toast.error("email không tồn tại!");

          }
     } else {
          toast.error("vui lòng nhập email!");
     }
     handleStateUpdateLoading(false);
}

