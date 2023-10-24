import "bootstrap/dist/css/bootstrap.min.css";
import "../Assets/Style.scss";
export function DefaultLayout() {
     return `
     <header class="mb-3">
     <div class="container">
     <h1><a href="/" data-route>Header</a></h1>
     </div>
     </header>
     <hr>
     <main>
     <div class="container">
     <div class="row">
          <div class="col-3">
               <h2>Menu</h2>
               <ul>
                    <li><a href="./" data-route>Trang Chủ</a></li>
                    <li><a href="./gioi-thieu" data-route>Giới thiệu</a></li>
                    <li><a href="./san-pham" data-route>Sản Phẩm</a></li>
               </ul>
          </div>
          <div class="col-9">
               {body}
          </div>
     </div>
     </div>
     </main>
     <footer class="mt-3">
          <div class="container">
               <h1>FOOTER</h1>
          </div>
     </footer>
     `
}
