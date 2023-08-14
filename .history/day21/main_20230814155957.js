console.log(
  "=================================== bai 1====================================================================="
);

var errors = {
  name: {
    required: "Vui lòng nhập họ tên",
    min: "Họ tên phải từ 5 ký tự",
  },
  email: {
    email: "Định dạng email không hợp lệ",
    unique: "Email đã có người sử dụng",
    required: "Vui lòng nhập địa chỉ email",
  },
  password: {
    required: "Vui lòng nhập mật khẩu",
    same: "Mật khẩu phải khớp với mật khẩu nhập lại",
  },
};
function getError(field) {
  const objectError = errors[field];
  if (objectError) {
    return Object.values(objectError)[0];
  } else {
    return "không tồn tại lỗi";
  }
}

console.log(getError("password"));

console.log(
  "=================================== bai 2 ====================================================================="
);

const customers = [
  { name: "Nguyễn Văn A", age: 11, address: "Ha Noi" },
  { name: "Nguyễn Văn B", age: 2, address: "Hai Phong" },
  { name: "Nguyễn Văn C", age: 12, address: "TP.HCM" },
];

const result = createCustomers(customers);

function createCustomers(customers) {
  if (Array.isArray(customers)) {
    const arrayCustomers = customers
      .sort((a, b) => a.age - b.age)
      .map((customer) => {
        customer["shortName"] =
          customer["name"].split(" ")[0] +
          " " +
          customer["name"].split(" ")[customer["name"].split(" ") - 1];
        return customer;
      });

    return arrayCustomers;
  } else {
    return undefined;
  }
}
