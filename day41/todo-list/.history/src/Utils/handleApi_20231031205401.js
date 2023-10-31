const apiUpdateTodo = async (id, newTodo, listTodos) => {
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
const apiDeleteTodo = async (id, newTodos) => {
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