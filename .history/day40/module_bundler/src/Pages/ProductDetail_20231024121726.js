import { products } from "./Products";
export function ProductDetail({ data }) {
     const flag = products.includes(product => product.id === +data.id);
     return `
     <h1>Chi tiết sản phẩm:${flag ? data.id : "không có sản phẩm có mã là " + data.id}</h1>
     <button onclick="navigate('/san-pham')">Back</button>
     `
}
