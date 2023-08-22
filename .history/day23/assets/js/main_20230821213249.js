const btn = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".modal-overlay");
const btnRegister = document.querySelector(".btn-regsiter");
const btnLogin = document.querySelector(".btn-login");
const modalRegister = document.querySelector(".modal-register");
const modalLogin = document.querySelector(".modal-login");
const eye = document.querySelectorAll(
  ".form-login-register .fa-regular.fa-eye"
);
const inputPasswd = document.querySelector(
  ".form-login-register .form-group__wrap input"
);

function handlShowModal() {
  if (modal) {
    modal.classList.toggle("is-show");
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
    console.log("login");
    btnLogin.classList.add("active");
    btnRegister.classList.remove("active");
    modalLogin.classList.add("active");
    modalRegister.classList.remove("active");
  });
}
if (btnRegister) {
  btnRegister.addEventListener("click", function (e) {
    console.log("login");
    btnRegister.classList.add("active");
    btnLogin.classList.remove("active");
    modalRegister.classList.add("active");
    modalLogin.classList.remove("active");
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
