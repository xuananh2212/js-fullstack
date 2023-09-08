window.addEventListener("load", function (e) {
  const $ = document.querySelector.bind(document);

  const tableProduct = $(".table-product");
  const tableOrder = $(".table-order");

  const products = [
    { id: 1, nameproduct: "sản phẩm 1", price: 1000 },
    { id: 2, nameproduct: "sản phẩm 2", price: 2000 },
    { id: 3, nameproduct: "sản phẩm 3", price: 3000 },
    { id: 4, nameproduct: "sản phẩm 4", price: 4000 },
  ];
  products &&
    products.forEach((product) => {
      var html = `
         <tbody>
           <tr>
             <td width="5%">STT</td>
             <td>Tên Sản Phẩm</td>
             <td width="5%">giá</td>
             <td width="20%">Số Lượng</td>
             <td width="20%">Thành Tiền</td>
             <td width="5%">Xoá</td>
           </tr>
         </tbody>;`;
    });
});
