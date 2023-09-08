window.addEventListener("load", function (e) {
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);

  const tableProduct = $(".table-product");
  const tableOrder = $(".table-order");
  var sttOrder = 1;

  // tạo ra danh sách các sản phẩm.
  const products = [
    { id: "product01", nameproduct: "Sản Phẩm 1", price: 1000 },
    { id: "product02", nameproduct: "Sản Phẩm 2", price: 2000 },
    { id: "product03", nameproduct: "Sản Phẩm 3", price: 3000 },
    { id: "product04", nameproduct: "Sản Phẩm 3", price: 4000 },
  ];
  // tạo ra danh sach các sản phẩn trong giỏ hàng(order)
  const orders = [];
  // tạo DOM element cho các sản phẩm.
  products &&
    products.forEach((product, index) => {
      var html = `
         <tbody>
           <tr data-id=${product.id}>
             <td width="5%" style="text-align: center;">${index + 1}</td>
             <td>${product.nameproduct}</td>
             <td width="5%" style="text-align: center;">${
               product.price.toLocaleString() + "đ"
             }</td>
             <td width="20%">
             <input type="number" name="" id="" value=1 min=1>
             </td>
             <td width="20%" style="text-align: center;"> 
             <button class="btn-add-order">Thêm vào giỏ</button>
             </td>
           </tr>
         </tbody>`;
      tableProduct.insertAdjacentHTML("beforeend", html);
    });
  const btnAddOrders = $$(".btn-add-order");
  btnAddOrders &&
    btnAddOrders.forEach((btnAddOrder) => {
      btnAddOrder.addEventListener("click", function (e) {
        var quantity =
          e.target.parentElement.previousElementSibling.querySelector(
            `input[type="number"]`
          );
        var productId = e.target.parentElement.parentElement.dataset.id;
        console.log(productId);
        const product = products.find((product) => product.id === productId);
        if (orders) {
        } else {
          product.quantity = quantity.value;
          orders.push();
        }
      });
    });
});
