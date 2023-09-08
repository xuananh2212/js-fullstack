window.addEventListener("load", function (e) {
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);

  const tableProduct = $(".table-product");
  const orderData = $(".order-data");
  console.log(orderData);
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

  function totalmoney() {
    var totalQuantity = 0;
    var totalMoney = 0;
    const rowTotal = $(".table-order .total");
    orders.forEach((orderItem) => {
      console.log(orderItem.quantity);
      console.log(orderItem.price);
      totalQuantity += orderItem.quantity;
      totalMoney += orderItem.quantity * orderItem.price;
    });
    rowTotal.querySelector(".quantity").textContent = totalQuantity;
    rowTotal.querySelector(".into-money").textContent =
      totalMoney.toLocaleString() + "đ";
    return rowTotal;
  }

  function createRowTable(product, quantity) {
    var order = { ...product };
    order.quantity = Number(quantity.value);
    orders.push(order);
    var rowTotal = totalmoney();
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
              ${(Number(quantity.value) * product.price).toLocaleString() + "đ"}
             </td>
             <td  style="text-align: center;"> 
             <button class="btn-remove-order">Xoá</button>
             </td>
           </tr>
         </tbody>`;
    rowTotal.insertAdjacentHTML("beforebegin", html);
  }

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
        var order = [...orders].find((order) => order.id === productId);
        if (orders.length > 0) {
          if (order) {
            order.quantity += Number(quantity.value);
            totalmoney();
            var productsDom = $$(".table-order tbody tr");
            productsDom.forEach((productDom) => {
              if (productDom.dataset.id === productId) {
                productDom.querySelector('input[type="number"]').value =
                  order.quantity;
                productDom.querySelector(".into-money").textContent =
                  (order.quantity * product.price).toLocaleString() + "đ";
              }
              return;
            });
          } else {
            createRowTable(product, quantity);
          }
        } else {
          orderData.innerHTML = `
            <table class="table-order">
                <thead>
                    <tr>
                        <th width="5%">STT</th>
                        <th>Tên Sản Phẩm</th>
                        <th width="5%">giá</th>
                        <th width="20%">Số Lượng</th>
                        <th width="20%">Thành Tiền</th>
                        <th width="5%">Xoá</th>
                    </tr>
                </thead>
                <tbody class="total">
                  <tr>
                      <td colspan="3">Tổng</td>
                      <td class="quantity">
                      </td>
                      <td colspan="2" class="into-money" style="text-align: right;">
                      </td>
                  </tr>
                </tbody>
            </table>
            <hr>
            <div class="cta-btn">
                <button class="btn-update-order">
                    Cập nhập giỏ hàng
                </button>
                <button class="btn-removeAll-order">
                    Xoá giỏ Hàng
                </button>

            </div>
        `;
          createRowTable(product, quantity);
        }
      });
    });
  // remove product
  const tableOrder = $(".table-order");
  tableOrder &&
    tableOrder.addEventListener("click", (e) => {
      if (e.target.matches(".btn-remove-order")) {
        e.target.parentElement.parentElement.remove();
      }
    });
});
