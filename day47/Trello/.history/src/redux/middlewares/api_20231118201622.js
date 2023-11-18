// Thumk middeware => function trả về 1 function khác
import { client } from '../../Utils/Configs/client'
export const fetchApiEmail = (dataEmail) => {
     return async (dispatch) => {
          const queryString = new URLSearchParams({ email: dataEmail });
          const { data } = await client.get(`/api-key?${queryString}`);
          console.log(data);
          console.log(data.data.apiKey);
          const { data: getdata } = await client.get(`/tasks`, null, data.data.apiKey);
          console.log(getdata);
          if (data.code === 200) {
               dispatch({
                    type: 'api/getEmail',
                    payload: data.data.apiKey
               })
          }
     }
}

export const fetchGetTasks = () => {
     return async (dispatch) => {
          const { data } = await client.get(`/tasks`, localStorage.getItem('api-key'));
          const { data: getdata } = await client.get(`/tasks`, null, data.data.apiKey);
          console.log(getdata);
          if (data.code === 200) {
               dispatch({
                    type: 'apiEmail/get',
                    payload: data.data.apiKey
               })
          }
     }
}