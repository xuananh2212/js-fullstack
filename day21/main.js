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
  { name: "Nguyễn Văn C", age: 19, address: "TP.HCM" },
  { name: "Nguyễn Văn D", age: 20, address: "TP.HCM" },
  { name: "Nguyễn Văn M", age: 50, address: "TP.HCM" },
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
          customer["name"].split(" ")[customer["name"].split(" ").length - 1];
        return customer;
      });

    return arrayCustomers;
  } else {
    return "không phải mảng";
  }
}
console.log(result);

console.log(
  "=================================== bai 3 ====================================================================="
);

const data = [];

const User = function (name, password, email) {
  this.name = name;
  this.password = password;
  this.email = email;
  this.role = "user";
};

const dataRegister = handleRegister(
  "Nguyen Van A",
  "123456",
  "nguyenvana@email.com"
);

const dataRegister1 = handleRegister(
  "Nguyen Van B",
  "1234567",
  "nguyenvanb@email.com"
);

// hàm register
function handleRegister(name, password, email) {
  if (!name || !password || !email) {
    return "Lỗi.thông tin không đủ";
  }
  data.push(new User(name, password, email));
  return "đăng kí thành công";
}

// Hàm login
function handleLogin(email, password) {
  for (var element of data) {
    if (element["email"] === email && element["password"] === password)
      return element;
  }

  return "thông tin đang nhập không hợp lệ";
}
console.log(data);
console.log(handleLogin("nguyenvana@email.com", "123456"));
