import "bootstrap/dist/css/bootstrap.min.css";
import "../Assets/Styles.scss"
export function Default() {
     return `
     <header class="mb-3">
     <div class="container">
     <h1><a href="/" data-route>Header</a></h1>
     </div>
     </header>
     <main>
     <div class="container">
     <div class="row">
       <div class="col-3">
         <h2>Menu</h2>
           <ul>
               <li><a href="/" data-route></a></li>
               <li><a href="/gioi-thieu" data-route></a></li>
               <li><a href="/san-pham" data-route></a></li>
           </ul>

         </div>
     </div>
     </div>
     </main>
     `
}
