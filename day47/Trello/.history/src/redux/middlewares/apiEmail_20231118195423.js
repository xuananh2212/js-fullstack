// Thumk middeware => function trả về 1 function khác
import { client }
export const fetchApiEmail = (email) => {
     return async (dispatch) => {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts');
          const data = await response.json();
          console.log(data);


     }
}