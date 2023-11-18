// Thumk middeware => function trả về 1 function khác
import { client } from '../../Utils/Configs/client'
export const fetchApiEmail = (dataEmail) => {
     return async (dispatch) => {
          const queryString = new URLSearchParams({ email: dataEmail });
          const response = await fetch('https://jsonplaceholder.typicode.com/posts');
          const { data } = await response.json();



     }
}