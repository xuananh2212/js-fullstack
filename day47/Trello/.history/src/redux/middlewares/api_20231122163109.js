import { toast } from 'react-toastify';
import { client } from '../../Utils/Configs/client'
export const fetchApiEmail = (dataEmail) => {
     return async (dispatch) => {
          const queryString = new URLSearchParams({ email: dataEmail });
          const { data } = await client.get(`/api-key?${queryString}`);
          if (data.code === 200) {
               localStorage.setItem('apiKey', data.data.apiKey)
               dispatch({
                    type: 'api/getEmail',
                    payload: data.data.apiKey
               })
               dispatch(fetchGetTasks(data.data.apiKey));
               toast.success("đăng nhập thành công ");
          } else {
               dispatch({
                    type: 'api/resetApiKey',
                    payload: false
               })
               toast.error("Email không tồn tại! ");
          }
     }
}

export const fetchGetTasks = (apiKey) => {
     return async (dispatch) => {
          const { data } = await client.get(`/tasks`, null, apiKey);
          if (data.code === 200) {
               dispatch({
                    type: 'tasks/getTasks',
                    payload: data.data
               })
               dispatch({
                    type: 'list/getList',
                    payload: data.data
               })
               dispatch({
                    type: 'api/getEmail',
                    payload: data.data.apiKey
               })
          } else {
               dispatch({
                    type: 'api/resetApiKey',
                    payload: false
               })
          }
     }
}
export const fetchPostTasks = (apiKey, body, feature, index = null, value = "") => {
     return async (dispatch) => {
          const { data } = await client.post(`/tasks`, body, apiKey);
          if (data.code === 200) {
               if (feature === "addTask") {
                    toast.success("Thêm công việc mới Thành công");
               } else if (feature === "removeTask") {
                    toast.success("Xoá công việc mới Thành công");
               } else if (feature === "removeColumn") {
                    dispatch({
                         type: "list/removeColumn",
                         payload: index
                    })
               } else if (feature === "editContentColumn") {
                    dispatch({
                         type: "list/editContentColumn",
                         payload: { index, value }
                    })
               }
               dispatch({
                    type: 'list/postTasks',
                    payload: { data: data.data, feature, index }
               })
               dispatch({
                    type: 'tasks/getTasks',
                    payload: data.data
               })
          } else {
               dispatch({
                    type: 'api/resetApiKey',
                    payload: false
               })
               toast.error(`Có lỗi vui lòng đăng nhập lại : ${data?.message}!`);
          }
     }
}