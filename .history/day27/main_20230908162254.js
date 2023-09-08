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
             <td  style="text-align: center;">${index + 1}</td>
             <td>${product.nameproduct}</td>
             <td style="text-align: center;">${
               product.price.toLocaleString() + "đ"
             }</td>
             <td >
             <input type="number" name="" id="" value=1 min=1>
             </td>
             <td style="text-align: center;"> 
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
        const product = products.find((product) => product.id === productId);
        if (orders.length > 0) {
          var order = [...orders].find((order) => order.id === productId);
          if (order) {
            order.quantity += Number(quantity.value);
            var productsDom = $$(".table-order tbody tr");
            console.log(productsDom);
            productsDom.forEach((product) => {
              if (product.id === productId) {
                product.querySelector('input[type="number"]').value =
                  order.quantity;
                console.log(product.querySelector('input[type="number"]'));
                product.querySelector(".into-money").textContent =
                  order.quantity * product.price;
                console.log(product.querySelector(".into-money"));
              }
              return;
            });
          } else {
            var order = { ...product };
            order.quantity = Number(quantity.value);
            orders.push(order);
            console.log(products);
            console.log(orders);
            var html = `
         <tbody>
           <tr data-id=${product.id}>
             <td style="text-align: center;">${sttOrder++}</td>
             <td>${product.nameproduct}</td>
             <td style="text-align: center;">${
               product.price.toLocaleString() + "đ"
             }</td>
             <td >
             <input type="number" name="" id="" value=${quantity.value} min=1>
             </td>
             <td class="into-money"> 
              ${Number(quantity.value) * product.price}
             </td>
             <td  style="text-align: center;"> 
             <button class="btn-remove-order">Xoá</button>
             </td>
           </tr>
         </tbody>`;
            tableOrder.insertAdjacentHTML("beforeend", html);
          }
        } else {
          var order = { ...product };
          order.quantity = Number(quantity.value);
          orders.push(order);
          console.log(products);
          console.log(orders);
          var html = `
         <tbody>
           <tr data-id=${product.id}>
             <td style="text-align: center;">${sttOrder++}</td>
             <td>${product.nameproduct}</td>
             <td style="text-align: center;">${
               product.price.toLocaleString() + "đ"
             }</td>
             <td >
             <input type="number" name="" id="" value=${quantity.value} min=1>
             </td>
             <td class="into-money"> 
              ${Number(quantity.value) * product.price}
             </td>
             <td  style="text-align: center;"> 
             <button class="btn-remove-order">Xoá</button>
             </td>
           </tr>
         </tbody>`;
          tableOrder.insertAdjacentHTML("beforeend", html);
        }
      });
    });
});
