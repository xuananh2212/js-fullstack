
export const products = [
     { id: 1, name: "sản phẩm 1" },
     { id: 2, name: "sản phẩm 2" },
     { id: 3, name: "sản phẩm 3" },
     { id: 4, name: "sản phẩm 4" },
     { id: 5, name: "sản phẩm 5" },
]

export function Products() {
     return `<h1>Danh sách các sản phẩm</h1>
     <ul>
     ${products.map(product => `<li><a href="/san-pham/${product.id}" data-route>Sản phẩm 1</a></li>`).join("")}
     </ul>`
}
