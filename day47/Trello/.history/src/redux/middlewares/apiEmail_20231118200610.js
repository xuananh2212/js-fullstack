// Thumk middeware => function trả về 1 function khác
import { client } from '../../Utils/Configs/client'
export const fetchApiEmail = (dataEmail) => {
     return async (dispatch) => {
          const queryString = new URLSearchParams({ email: dataEmail });
          const { data } = await client.get(`/api-key?${queryString}`);
          console.log(data);
          if (data.code === 200) {
               dispatch({
                    type: 'apiEmail/get',
                    payload: data.data.apikey
               })
          }
     }
}