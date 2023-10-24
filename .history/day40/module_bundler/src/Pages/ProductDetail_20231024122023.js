import { products } from "./Products";
export function ProductDetail({ data }) {
     const product = products.find(product =>
          product.id === +data.id
     );
     return `
     <h1>Chi tiết sản phẩm:${flag ? data.id : "không có sản phẩm " + data.id}</h1>
     <button onclick="navigate('/san-pham')">Back</button>
     `
}
