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

const btnRegister = document.querySelector(".btn-register");
const btnLogin = document.querySelector(".btn-login");
console.log(btnRegister);
console.log(btnLogin);
if (btnLogin) {
  btnLogin.addEventListener("click", function (e) {
    console.log("login");
    btnLogin.classList.add("active");
    btnRegister.classList.remove("active");
  });
} else {
  console.log("register");
}
if (btnRegister) {
  btnRegister.addEventListener("click", function (e) {
    console.log("login");
    btnRegister.classList.add("active");
    btnLogin.classList.remove("active");
  });
} else {
  console.log("register");
}