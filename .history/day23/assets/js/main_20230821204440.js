const btn = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".modal-overlay");

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

const btnRegister = document.querySelector(".btn-regsiter");
const btnLogin = document.querySelector(".btn-login");
const modalRegister = document.querySelector(".modal-register");
const modalLogin = document.querySelector(".modal-login");

if (btnLogin) {
  btnLogin.addEventListener("click", function (e) {
    console.log("login");
    btnLogin.classList.add("active");
    btnRegister.classList.remove("active");
    modalRegister.classList.add("active");
    modalLogin.classList.remove("active");
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
