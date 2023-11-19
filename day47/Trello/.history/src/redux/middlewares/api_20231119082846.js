// Thumk middeware => function trả về 1 function khác
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
          } else {
               dispatch({
                    type: 'api/resetApiKey',
                    payload: false
               })
          }
     }
}

export const fetchGetTasks = (apiKey) => {
     return async (dispatch) => {
          const { data } = await client.get(`/tasks`, null, apiKey);
          console.log(data);
          if (data.code === 200) {
               dispatch({
                    type: 'tasks/getTasks',
                    payload: data.data.tasks
               })
               dispatch({
                    type: 'list/getList',
                    payload: data.data
               })
          } else {
               dispatch({
                    type: 'api/resetApiKey',
                    payload: false
               })
          }
     }
}
export const fetchPostTasks = (apiKey, body, _id) => {
     return async (dispatch) => {
          const { data } = await client.post(`/tasks`, body, apiKey);
          if (data.code === 200) {
               dispatch({
                    type: 'list/addTasks',
                    payload: { ...body, listId: _id }
               })
          } else {
               dispatch({
                    type: 'api/resetApiKey',
                    payload: false
               })
          }
     }
}