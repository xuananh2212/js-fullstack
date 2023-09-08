window.addEventListener("load", function (e) {
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);

  const tableProduct = $(".table-product");
  const tableOrder = $(".table-order");

  // tạo ra danh sách các sản phẩm.
  const products = [
    { id: 1, nameproduct: "sản phẩm 1", price: 1000 },
    { id: 2, nameproduct: "sản phẩm 2", price: 2000 },
    { id: 3, nameproduct: "sản phẩm 3", price: 3000 },
    { id: 4, nameproduct: "sản phẩm 4", price: 4000 },
  ];
  // tạo ra danh sach các sản phẩn trong giỏ hàng(order)
  const orders = [];
  // tạo DOM element cho các sản phẩm.
  products &&
    products.forEach((product, index) => {
      var html = `
         <tbody>
           <tr>
             <td width="5%" style="text-align: center;">${index + 1}</td>
             <td>${product.nameproduct}</td>
             <td width="5%" style="text-align: center;">${
               product.price.toLocaleString() + "đ"
             }</td>
             <td width="20%">
             <input type="number" name="" id="" value=1 min=1>
             </td>
             <td  width="20%" style="text-align: center;"> <button class="btn-add-order">thêm vào giỏ</button></td>
           </tr>
         </tbody>`;
      tableProduct.insertAdjacentHTML("beforeend", html);
    });
  const addOrder = $$(".btn-add-order");
  addOrder &&
    addOrder.forEach((order) => {
      order.addEventListener("click", function (e) {
        var btnAddOrder = e.target;
        console.log(btnAddOrder);
      });
    });
});
