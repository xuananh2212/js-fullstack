import { toast } from 'react-toastify';
export const apiUpdateTodo = async (id, newTodo, listTodos) => {
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
export const apiDeleteTodo = async (id, newTodos) => {
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
export const apiAddTodo = async (todo) => {
     const apiKey = getApiKeyCookie();
     if (apiKey) {
          handleStateUpdateLoading(true);
          const { data } = await client.post("/todos", { todo }, apiKey);
          if (data.code === 201) {
               console.log(1);
               handleStateUpdateTodos(null, data.data);
               toast.success("thêm thành công");
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