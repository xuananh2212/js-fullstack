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
          if (data.code === 200) {
               const totalTasks = data.data.tasks.map(({ _id, content, column }) => ({ _id, content, column }));
               dispatch({
                    type: 'tasks/getTasks',
                    payload: totalTasks
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
export const fetchAddTasks = (apiKey, body, newTask, columnId) => {
     return async (dispatch) => {
          const { data } = await client.post(`/tasks`, body, apiKey);
          if (data.code === 200) {
               dispatch({
                    type: 'list/addTasks',
                    payload: { newTask, columnId }
               })
               dispatch({
                    type: 'tasks/addTasks',
                    payload: { newTask }
               })
          } else {
               dispatch({
                    type: 'api/resetApiKey',
                    payload: false
               })
          }
     }
}