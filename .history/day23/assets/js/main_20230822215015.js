//modal
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".modal-overlay");
const modalText = document.querySelector(".modal-text");
const modalRegister = document.querySelector(".modal-register");
const modalLoginRegister = document.querySelector(".modal-login-register");
const modalSocial = document.querySelector(".modal-social");
const modalLogin = document.querySelector(".modal-login");

//form
const form = document.querySelector(".form-login-register");
const btn = document.querySelector(".btn");
const btnRegister = document.querySelector(".btn-regsiter");
const btnForget = document.querySelector(".btn-forget");
const btnLogin = document.querySelector(".btn-login");
var inputPasswd = document.querySelector(".form-group__wrap  #passwd");
const eye = document.querySelector(".form-login-register .fa-regular.fa-eye");
const formGroupName = document.querySelector("#full-name").parentElement;
const formGroupDesc = document.querySelector(".form-group .desc");
const inputAll = [...document.querySelectorAll(".form-login-register input")];
var spanPasswd = document.querySelector(".error-passwd");
var spanEmail = document.querySelector(".error-email");
var spanFullName = document.querySelector(".error-name");
const email = document.querySelector("input#email");
const passwd = document.querySelector("input#passwd");
const fullName = document.querySelector("input#full-name");
const btnCta = document.querySelector(".btn-cta");

//
const users = [];

function User(fullName, email, passwd) {
  this.fullName = fullName;
  this.email = email;
  this.passwd = passwd;
}

function handlShowModal() {
  if (modal) {
    modal.classList.toggle("is-show");
    if (btnRegister.classList.contains("active")) {
      btnRegister.classList.remove("active");
      btnLogin.classList.add("active");
      btnRegister.classList.remove("active");
      modalText.innerHTML = "với các tài khoản mạng xã hội";
      modalSocial.classList.remove("hidden");
      modalSocial.nextElementSibling.classList.remove("hidden");
      formGroupName.classList.add("hidden");
      btnForget.classList.remove("hidden");
      formGroupDesc.classList.add("hidden");
      inputAll.forEach((input) => {
        input.value = "";
        input.classList.remove("error");
        spanPasswd.innerHTML = "";
        spanEmail.innerHTML = "";
        spanFullName.innerHTML = "";
      });
      btnCta.innerHTML = "đăng nhập";
    }
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
    btnLogin.classList.add("active");
    btnRegister.classList.remove("active");
    modalText.innerHTML = "với các tài khoản mạng xã hội";
    modalSocial.classList.remove("hidden");
    modalSocial.nextElementSibling.classList.remove("hidden");
    formGroupName.classList.add("hidden");
    btnForget.classList.remove("hidden");
    formGroupDesc.classList.add("hidden");
    inputAll.forEach((input) => {
      input.value = "";
      input.classList.remove("error");
      spanPasswd.innerHTML = "";
      spanEmail.innerHTML = "";
      spanFullName.innerHTML = "";
    });
    btnCta.innerHTML = "đăng nhập";
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
  if (email.value === null || email.value === "") {
    spanEmail.textContent = "vui lòng nhập thông tin";
    email.classList.add("error");
  }
  if (passwd.value === "" || passwd.value === null) {
    spanPasswd.textContent = "vui lòng nhập thông tin";
    passwd.classList.add("error");
  }
  if (fullName.value === "" || fullName.value === null) {
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
    if (this.value === null || this.value === "") {
      spanPasswd.textContent = "vui lòng nhập thông tin";
      passwd.classList.add("error");
    } else if (btnRegister.classList.contains("active")) {
      var regex = /^(.{6,20})$/;
      if (regex.test(passwd.value)) {
        spanPasswd.textContent = "";
        passwd.classList.remove("error");

        if (fullName.value === "" || fullName.value === null) {
          spanFullName.textContent = "vui lòng nhập thông tin";
          fullName.classList.add("error");
        }
        if (email.value === "" || email.value === null) {
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

        if (fullName.value === "" || fullName.value === null) {
          spanFullName.textContent = "vui lòng nhập thông tin";
          fullName.classList.add("error");
        }
        if (email.value === "" || email.value === null) {
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
    if (this.value === null || this.value === "") {
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
  if (btnRegister.classList.contains("active")) {
    if (passwd.value.length > 6 && fullName.name !== "") {
      var newUser = new User(fullName.value, email.value, passwd.value);
      if (users.some((user) => user.email === newUser.email)) {
      } else {
        console.log("đăng kí thành công");
      }
    }

    console.log("register");
  } else {
  }
});
