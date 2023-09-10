window.addEventListener("load", function (e) {
  const $ = document.querySelector.bind(document);
  const $$ = document.querySelectorAll.bind(document);

  const tableProduct = $(".table-product");
  const orderData = $(".order-data");
  const modal = $(".modal");
  const textModal = $(".modal-text");
  const btnAgree = $(".agree");
  const btnCancel = $(".cancel");
  const container = $(".container");
  var btnRemoveCurrent;
  var isUpdate = false;
  var productId;
  var sttOrder = 0;
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
             <input type="number"  value=1  min="1">
             <span class="value-integer">Vui Lòng nhập giá trị số nguyên</span>
             </td>
             <td style="text-align: center;"> 
             <button class="btn-add-order">Thêm vào giỏ</button>
             </td>
           </tr>
         </tbody>`;
      tableProduct.insertAdjacentHTML("beforeend", html);
    });
  // tạo danh sách cách sản phẩm trong giỏ hàng.

  // if (Array.isArray(orders)) {
  if (orders.length > 0) {
    orderData.innerHTML = returnHtml();
    orders.forEach((order) => {
      createRowTable(order);
    });
  }
  // }
  function totalmoney() {
    var totalQuantity = 0;
    var totalMoney = 0;
    const rowTotal = $(".table-order .total");
    orders.forEach((orderItem) => {
      totalQuantity += orderItem.quantity;
      totalMoney += orderItem.quantity * orderItem.price;
    });
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
             <td style="text-align: center;">${++sttOrder}</td>
             <td>${product.nameproduct}</td>
             <td style="text-align: center;">${
               product.price.toLocaleString() + "đ"
             }</td>
             <td >
             <input type="number" name="" id="" value=${
               product.quantity
             } min=1  required  pattern="[0-9]+">
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
    textModal.innerHTML = "Bạn chắc chắn muốn Xoá?";
    textModal.classList.remove("update");
    textModal.classList.remove("error");
    textModal.classList.remove("success");
    btnAgree.classList.remove("hidden");
    btnCancel.classList.remove("hidden");
  }
  function updateOrder() {
    var flag = false;
    var productsDom = $$(".table-order tbody tr[data-id]");
    [...productsDom].forEach((product) => {
      var orderCurrent = orders.find(
        (order) => order.id === product.dataset.id
      );
      var quantityProduct = product.querySelector(`input[type="number"]`).value;
      if (Number(quantityProduct) === 0) {
        productId = product.dataset.id;
        btnRemoveCurrent = product.querySelector(`.btn-remove-order`);
        reomveProduct();
      } else if (
        Number(quantityProduct) !== orderCurrent.quantity &&
        checkInt(Number(quantityProduct))
      ) {
        console.log(checkInt(Number(quantityProduct)));
        flag = true;
        orderCurrent.quantity = +quantityProduct;
        var intoMoney = product.querySelector(".into-money");
        intoMoney.textContent =
          (orderCurrent.price * orderCurrent.quantity).toLocaleString() + "đ";
        totalmoney();
        localStorage.setItem("orders", JSON.stringify(orders));
        textModal.classList.add("success");
        textModal.textContent = "Cập nhật thành công";
        textModal.classList.remove("error");
      } else if (!checkInt(Number(quantityProduct))) {
        flag = true;
        textModal.classList.add("error");
        textModal.textContent = "Cập nhật thất bại Số lượng phải là số nguyên!";
        textModal.classList.remove("success");
      }
      if (!flag) {
        textModal.classList.add("success");
        textModal.textContent = "số lượng các sản phẩm không đổi";
        textModal.classList.remove("error");
      }
    });
  }
  function reomveProduct() {
    var indexProduct = orders.findIndex(
      (orderItem) => orderItem.id === productId
    );
    orders.splice(indexProduct, 1);
    localStorage.setItem("orders", JSON.stringify(orders));
    totalmoney();
    sttOrder--;
    btnRemoveCurrent.parentElement.parentElement.parentElement.remove();
    var toast = $(".toast");
    toast && toast.remove();
    createToast("Xoá thành Công", 1);
    if (orders.length === 0) {
      sttOrder = 0;
      orderData.innerHTML = "Giỏ hành không có sản phẩm.";
    } else {
      // update lại stt
      var sttProducts = $$(".table-order tr[data-id] td:first-child");
      sttProducts.forEach((sttProducts, index) => {
        sttProducts.innerHTML = ++index;
      });
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
  function checkInt(value) {
    if (/^[1-9][0-9]*$/.test(value)) {
      return true;
    }
    return false;
  }

  function createToast(message, status) {
    var html = `<div class="toast">
        <div class="toast-inner">
            <i class="fa-solid icon-toast ${
              status === 1 ? "fa-check" : "fa-xmark"
            }"></i>
            <div class="toast-content">
                <span class="status ${status === 1 ? "success" : "error"}">${
      status === 1 ? "success" : "error"
    }</span>
                <p class="desc">${message}</p>
            </div>
        </div>
    </div>`;
    container.insertAdjacentHTML("afterend", html);
    setTimeout(function () {
      var toast = document.querySelector(".toast");
      toast.remove();
    }, 1600);
  }
  const btnAddOrders = $$(".btn-add-order");
  btnAddOrders &&
    btnAddOrders.forEach((btnAddOrder) => {
      btnAddOrder.addEventListener("click", function (e) {
        var quantity =
          e.target.parentElement.previousElementSibling.querySelector(
            `input[type="number"]`
          );
        var spanError =
          e.target.parentElement.previousElementSibling.querySelector(
            `.value-integer`
          );
        var productId = e.target.parentElement.parentElement.dataset.id;
        const product = products.find((product) => product.id === productId);
        var order = [...orders].find((order) => order.id === productId);
        if (orders.length > 0) {
          if (order) {
            if (checkInt(Number(quantity.value))) {
              order.quantity += Number(quantity.value);
              localStorage.setItem("orders", JSON.stringify(orders));
              totalmoney();
              spanError.classList.remove("error");
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
              spanError.classList.add("error");
              spanError.textContent = "Vui Lòng nhập giá trị số nguyên";
            }
          } else {
            var order = { ...product };
            if (checkInt(Number(quantity.value))) {
              order.quantity = Number(quantity.value);
              orders.push(order);
              localStorage.setItem("orders", JSON.stringify(orders));
              createRowTable(order);
              spanError.classList.remove("error");
            } else {
              spanError.classList.add("error");
              spanError.textContent = "Vui Lòng nhập giá trị số nguyên";
            }
          }
        } else {
          var order = { ...product };
          if (checkInt(Number(quantity.value))) {
            order.quantity = Number(quantity.value);
            orders.push(order);
            localStorage.setItem("orders", JSON.stringify(orders));
            orderData.innerHTML = returnHtml();
            spanError.classList.remove("error");
            createRowTable(order);
          } else {
            spanError.classList.add("error");
            spanError.textContent = "Vui Lòng nhập giá trị số nguyên";
          }
        }
      });
    });
  modal.addEventListener("click", function (e) {
    if (e.target.matches(".agree")) {
      if (isRemoveAll) {
        orders = [];
        localStorage.setItem("orders", JSON.stringify(orders));
        orderData.innerHTML = "Giỏ hàng không có sản phẩm.";
        modal.classList.remove("is-show");
        createToast("Xoá Thành Công", 1);
        return;
      }
      reomveProduct();
    } else if (
      e.target.matches(".cancel") ||
      e.target.matches(".modal-close") ||
      e.target.matches(".modal-overlay")
    ) {
      modal.classList.remove("is-show");
      if (!isUpdate) {
        console.log("vao khong");
        var toast = $(".toast");
        toast && toast.remove();
        createToast("Xoá Thất Bại", -1);
      }
      isUpdate = false;
    }
  });
  // remove product
  orderData.addEventListener("click", function (e) {
    if (e.target.matches(".btn-remove-order")) {
      isRemoveAll = false;
      btnRemoveCurrent = e.target;
      productId = btnRemoveCurrent.parentElement.parentElement.dataset.id;
      modalShow();
    } else if (e.target.matches(".btn-removeAll-order")) {
      modalShow();
      textModal.innerHTML = "Bạn có chắc chắn Xoá Tất Cả giỏ hàng?";
      isRemoveAll = true;
      sttOrder = 0;
    } else if (e.target.matches(".btn-update-order")) {
      modal.classList.add("is-show");
      updateOrder();
      isUpdate = true;
      btnAgree.classList.add("hidden");
      btnCancel.classList.add("hidden");
    }
  });
});
