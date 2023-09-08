window.addEventListener("load", function (e) {
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);

  const tableProduct = $(".table-product");
  const orderData = $(".order-data");
  const modal = $(".modal");
  const textModal = $(".modal-text");
  const btnAgree = $(".agree");
  const btnCancel = $(".cancel");
  var btnRemoveCurrent;
  var productId;
  var sttOrder = 1;
  var isRemoveAll = false;

  // tạo ra danh sách các sản phẩm.
  const products = [
    { id: "product01", nameproduct: "Sản Phẩm 1", price: 1000 },
    { id: "product02", nameproduct: "Sản Phẩm 2", price: 2000 },
    { id: "product03", nameproduct: "Sản Phẩm 3", price: 3000 },
    { id: "product04", nameproduct: "Sản Phẩm 3", price: 4000 },
  ];
  // tạo ra danh sach các sản phẩn trong giỏ hàng(order)
  var orders =
    localStorage.length > 0 ? JSON.parse(localStorage.getItem("orders")) : [];
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
  // tạo danh sách cách sản phẩm trong giỏ hàng.

  if (orders.length > 0) {
    orderData.innerHTML = returnHtml;
    orders.forEach((order) => {
      createRowTable(order);
    });
  }

  function totalmoney() {
    var totalQuantity = 0;
    var totalMoney = 0;
    const rowTotal = $(".table-order .total");
    orders.forEach((orderItem) => {
      totalQuantity += orderItem.quantity;
      totalMoney += orderItem.quantity * orderItem.price;
    });
    console.log(rowTotal.querySelector(".quantity"));
    rowTotal.querySelector(".quantity").textContent = totalQuantity;
    rowTotal.querySelector(".into-money").textContent =
      totalMoney.toLocaleString() + "đ";
    return rowTotal;
  }

  function createRowTable(product) {
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
             <input type="number" name="" id="" value=${product.quantity} min=1>
             </td>
             <td class="into-money"> 
              ${(product.quantity * product.price).toLocaleString() + "đ"}
             </td>
             <td  style="text-align: center;"> 
             <button class="btn-remove-order">Xoá</button>
             </td>
           </tr>
         </tbody>`;
    rowTotal.insertAdjacentHTML("beforebegin", html);
  }

  function modalShow() {
    modal.classList.add("is-show");
    textModal.innerHTML = "Bạn có chắc chắn của Xoá không?";
    btnAgree.classList.remove("hidden");
    btnCancel.classList.remove("hidden");
  }
  function updateOrder() {
    var productsDom = $$(".table-order tbody tr[data-id]");
    console.log(orders);
    console.log(productsDom);
    [...productsDom].forEach((product) => {
      var orderCurrent = orders.find(
        (order) => order.id === product.dataset.id
      );
      console.log(product.querySelector(`input[type="number"]`));
      var quantityProduct = product.querySelector(`input[type="number"]`).value;
      console.log(quantityProduct);
      if (Number(quantityProduct) === 0) {
        productId = product.dataset.id;
        btnRemoveCurrent = product.querySelector(`.btn-remove-order`);
        reomveProduct();
      } else if (Number(quantityProduct) !== orderCurrent.quantity) {
        orderCurrent.quantity = +quantityProduct;
        var intoMoney = product.querySelector(".into-money");
        intoMoney.textContent =
          (orderCurrent.price * orderCurrent.quantity).toLocaleString() + "đ";
        totalmoney();
      }
    });
  }
  function reomveProduct() {
    var indexProduct = orders.findIndex(
      (orderItem) => orderItem.id === productId
    );
    orders.splice(indexProduct, 1);
    localStorage.setItem("orders", JSON.stringify(orders));
    console.log(orders);
    totalmoney();
    btnRemoveCurrent.parentElement.parentElement.parentElement.remove();
    if (orders.length === 0) {
      orderData.innerHTML = "Giỏ hành không có sản phẩm.";
    }
    modal.classList.remove("is-show");
  }

  function returnHtml() {
    return `
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
            localStorage.setItem("orders", JSON.stringify(orders));
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
            var order = { ...product };
            order.quantity = Number(quantity.value);
            orders.push(order);
            localStorage.setItem("orders", JSON.stringify(orders));
            createRowTable(order);
          }
        } else {
          var order = { ...product };
          order.quantity = Number(quantity.value);
          orders.push(order);
          localStorage.setItem("orders", JSON.stringify(orders));
          orderData.innerHTML = returnHtml;
          createRowTable(order);
        }
      });
    });
  modal.addEventListener("click", function (e) {
    if (e.target.matches(".agree")) {
      if (isRemoveAll) {
        orders = [];
        localStorage.setItem("orders", JSON.stringify(orders));
        orderData.innerHTML = "Giỏ hành không có sản phẩm.";
        modal.classList.remove("is-show");
        return;
      }
      reomveProduct();
    } else if (
      e.target.matches(".cancel") ||
      e.target.matches(".modal-close") ||
      e.target.matches(".modal-overlay")
    ) {
      updateOrder();
      modal.classList.remove("is-show");
    }
  });
  // remove product
  orderData.addEventListener("click", function (e) {
    if (e.target.matches(".btn-remove-order")) {
      btnRemoveCurrent = e.target;
      productId = btnRemoveCurrent.parentElement.parentElement.dataset.id;
      modalShow();
    } else if (e.target.matches(".btn-removeAll-order")) {
      modalShow();
      isRemoveAll = true;
    } else if (e.target.matches(".btn-update-order")) {
      modal.classList.add("is-show");
      textModal.innerHTML = "Cập nhật giỏ hàng thành công";
      btnAgree.classList.add("hidden");
      btnCancel.classList.add("hidden");
    }
  });
});
