import { naviage } from '../Utils/router'
export function ProductDetail({ data }) {
     console.log(data);
     return `
     <h1>Chi tiết sản phẩm:${data.id}</h1>
     <button onclick="navigate('/san-pham')">Back</button>
     `
}
