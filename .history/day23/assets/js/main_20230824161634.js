//

var $ = function (tag) {
  return document.querySelector(tag);
};

var $$ = function (tag) {
  return document.querySelectorAll(tag);
};

//modal
const modal = $(".modal");
const overlay = $(".modal-overlay");
const modalText = $(".modal-text");
const modalRegister = $(".modal-register");
const modalLoginRegister = $(".modal-login-register");
const modalSocial = $(".modal-social");
const modalLogin = $(".modal-login");
const modalTextRegister = $(".modal-text-register");
const modalTextLogin = $(".modal-text-login");

//form
const form = $(".form-login-register");
const btn = $(".btn");
const btnRegister = $(".btn-regsiter");
const btnForget = $(".btn-forget");
const btnLogin = $(".btn-login");
var inputPasswd = $(".form-group__wrap  #passwd");
const eye = $(".form-login-register .fa-regular.fa-eye");
const formGroupName = $("#full-name").parentElement;
const formGroupDesc = $(".form-group .desc");
const inputAll = [...document.querySelectorAll(".form-login-register input")];
var spanPasswd = $(".error-passwd");
var spanEmail = $(".error-email");
var spanFullName = $(".error-name");
const email = $("input#email");
const passwd = $("input#passwd");
const fullName = $("input#full-name");
const btnCta = $(".btn-cta");

//
const users = [
  {
    fullName: "tuananh",
    email: "xuantuananh2212@gmail.com",
    passwd: "123456",
  },
];

function User(fullName, email, passwd) {
  this.fullName = fullName;
  this.email = email;
  this.passwd = passwd;
}

function activeBtnLogin() {
  btnLogin.classList.add("active");
  btnRegister.classList.remove("active");
  modalText.innerHTML = "với các tài khoản mạng xã hội";
  modalSocial.classList.remove("hidden");
  modalSocial.nextElementSibling.classList.remove("hidden");
  formGroupName.classList.add("hidden");
  btnForget.classList.remove("hidden");
  formGroupDesc.classList.add("hidden");
  modalTextRegister.innerHTML = "";
  inputAll.forEach((input) => {
    input.value = "";
    console.log(input.value);
    input.classList.remove("error");
    spanPasswd.innerHTML = "";
    spanEmail.innerHTML = "";
    spanFullName.innerHTML = "";
  });
  btnCta.innerHTML = "đăng nhập";
}

function handlShowModal() {
  if (modal) {
    modal.classList.toggle("is-show");
    activeBtnLogin();
  }
}
if (btn) {
  btn.addEventListener("click", handlShowModal);
}

if (overlay) {
  overlay.addEventListener("click", handlShowModal);
}

if (btnLogin) {
  btnLogin.addEventListener("click", function (e) {
    activeBtnLogin();
  });
}

if (btnRegister) {
  btnRegister.addEventListener("click", function (e) {
    btnRegister.classList.add("active");
    btnLogin.classList.remove("active");
    modalText.innerHTML = "Hoàn thành đăng ký, và bắt đầu trải nghiệm ngay!";
    modalSocial.classList.add("hidden");
    modalSocial.nextElementSibling.classList.add("hidden");
    btnForget.classList.add("hidden");
    formGroupName.classList.remove("hidden");
    formGroupDesc.classList.remove("hidden");
    modalTextLogin.innerHTML = "";
    inputAll.forEach((input) => {
      input.value = "";
      input.classList.remove("error");
      spanPasswd.innerHTML = "";
      spanEmail.innerHTML = "";
      spanFullName.innerHTML = "";
    });
    btnCta.innerHTML = "Đăng Kí";
  });
}

if (eye) {
  eye.addEventListener("click", function (e) {
    if (eye.classList.contains("fa-eye")) {
      eye.classList.remove("fa-eye");
      eye.classList.add("fa-eye-slash");
      inputPasswd.setAttribute("type", "text");
    } else {
      eye.classList.remove("fa-eye-slash");
      eye.classList.add("fa-eye");
      inputPasswd.setAttribute("type", "password");
    }
  });
}

function checkErrorAll() {
  if (email.value) {
    spanEmail.textContent = "vui lòng nhập thông tin";
    email.classList.add("error");
  }
  if (passwd.value) {
    spanPasswd.textContent = "vui lòng nhập thông tin";
    passwd.classList.add("error");
  }
  if (fullName.value) {
    spanFullName.textContent = "vui lòng nhập thông tin";
    fullName.classList.add("error");
  }
}

if (email) {
  var regex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
  email.addEventListener("blur", checkErrorAll);
  email.addEventListener("input", function (e) {
    if (this.value === null || this.value === "") {
      spanEmail.textContent = "vui lòng nhập thông tin";
      email.classList.add("error");
    } else if (regex.test(this.value)) {
      spanEmail.textContent = "";
      email.classList.remove("error");
    } else {
      spanEmail.textContent = "Vui lòng nhập đúng định dạng email";
      email.classList.add("error");
      checkErrorAll();
    }
  });
}

if (passwd) {
  passwd.addEventListener("blur", checkErrorAll);
  passwd.addEventListener("input", function (e) {
    if (this.value) {
      spanPasswd.textContent = "vui lòng nhập thông tin";
      passwd.classList.add("error");
    } else if (btnRegister.classList.contains("active")) {
      var regex = /^(.{6,20})$/;
      if (regex.test(passwd.value)) {
        spanPasswd.textContent = "";
        passwd.classList.remove("error");

        if (fullName.value) {
          spanFullName.textContent = "vui lòng nhập thông tin";
          fullName.classList.add("error");
        }
        if (email.value) {
          email.classList.add("error");
          spanEmail.textContent = "vui lòng nhập thông tin";
        }
      } else {
        spanPasswd.textContent = "Mật khẩu tối thiểu 6 - 20 ký tự";
        passwd.classList.remove("error");
        checkErrorAll();
      }
    } else {
      if (passwd.value.length > 0) {
        spanPasswd.textContent = "";
        passwd.classList.remove("error");

        if (fullName.value) {
          spanFullName.textContent = "vui lòng nhập thông tin";
          fullName.classList.add("error");
        }
        if (email.value) {
          email.classList.add("error");
          spanEmail.textContent = "vui lòng nhập thông tin";
        }
      } else {
        checkErrorAll();
      }
    }
  });
}

if (fullName) {
  fullName.addEventListener("blur", checkErrorAll);
  fullName.addEventListener("input", function (e) {
    if (this.value) {
      spanFullName.textContent = "vui lòng nhập thông tin";
      fullName.classList.add("error");
    } else if (fullName.value.length > 0) {
      spanFullName.textContent = "";
      fullName.classList.remove("error");
      checkErrorAll();
    } else {
      spanFullName.textContent = "vui lòng nhập thông tin";

      email.classList.add("error");
      fullName.classList.add("error");
    }
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(fullName.value);
  if (btnRegister.classList.contains("active")) {
    if (
      passwd.value.length >= 6 &&
      fullName.value !== "" &&
      fullName.value !== null
    ) {
      var newUser = new User(fullName.value, email.value, passwd.value);
      if (users.some((user) => user.email === newUser.email)) {
        modalTextRegister.innerHTML = "Email tồn tại";
        modalTextRegister.classList.remove("success");
        modalTextRegister.classList.add("error");
      } else {
        users.push(newUser);
        modalTextRegister.innerHTML = "Đăng Kí thành công";
        modalTextRegister.classList.remove("error");
        modalTextRegister.classList.add("success");
        setTimeout(() => {
          activeBtnLogin();
          email.value = newUser.email;
          passwd.value = newUser.passwd;
        }, 1000);
      }
    } else {
      console.log("error");
    }
  } else {
    const user = users.find(
      (user) => user.email === email.value && user.passwd === passwd.value
    );

    if (user) {
      modalTextLogin.innerHTML = "";
      modalTextLogin.classList.remove("error");
      setTimeout(() => {
        alert("Đăng nhập thành công");
        modal.classList.remove("is-show");
      }, 800);
    } else {
      modalTextLogin.innerHTML = "tài khoản và mật khẩu không chính xác";
      modalTextLogin.classList.add("error");
    }
  }
});
