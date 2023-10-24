import image from './Assets/Images/Error-404.jpg';
import './Assets/Error';

export const Error = () => {
     return `
     <div class="error-page">
       <img src="${image}" />
     </div>
     `
}