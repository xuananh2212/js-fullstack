const products = [
     { id: 1, name: "sản phẩm 1" },
     { id: 1, name: "sản phẩm 1" },

     { id: 1, name: "sản phẩm 1" },

     { id: 1, name: "sản phẩm 1" },

     { id: 1, name: "sản phẩm 1" },



]

export function Products() {
     return `<h1>Danh sách các sản phẩm</h1>
     <ul>
          <li><a href="/san-pham/1" data-route>Sản phẩm 1</a></li>
          <li><a href="/san-pham/2" data-route>Sản phẩm 2</a></li>
          <li><a href="/san-pham/3" data-route>Sản Phẩm 3</a></li>
     </ul>`
}
