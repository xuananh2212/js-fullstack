const btn = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".modal-overlay");
const btnRegister = document.querySelector(".btn-regsiter");
const btnLogin = document.querySelector(".btn-login");
const modalRegister = document.querySelector(".modal-register");
const modalLogin = document.querySelector(".modal-login");
const modalLoginRegister = document.querySelector(".modal-login-register");
var inputPasswd = document.querySelector(".form-group__wrap  #passwd");
const eye = document.querySelector(".form-login-register .fa-regular.fa-eye");

var htmlRegister = `
 <div class="modal-register">
                        <span class="modal-text">Hoàn thành đăng ký, và bắt đầu trải nghiệm ngay!</span>
                        <form action="" class="form-login-register">
                            <div class="form-group">
                                <label for="fullName">Họ và Tên</label>
                                <input required type="fullName" name="fullName" id="fullName" placeholder="Họ và Tên">
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input required type="email" name="email" id="email" placeholder="Email">
                            </div>
                            <div class="form-group">
                                <label for="passwd">Mật khẩu</label>
                                <div class="form-group__wrap">
                                    <input required type="password" name="passwd" id="passwd" placeholder="Mật khẩu">
                                    <i class="fa-regular fa-eye"></i>
                                </div>
                            </div>
                            <div class="form-group">
                                <p class="desc">
                                    Bằng cách đăng ký tài khoản, bạn cũng đồng thời chấp nhận mọi
                                    <a href="#!" class="link"> điều kiện về qui
                                        định và chính sách của Dân trí
                                    </a>
                                </p>
                            </div>
                            <div class="form-group">
                                <button class="btn-cta register" type="submit">Đăng Kí</button>
                            </div>
                        </form>
                    </div>`;

var htmlLogin = `
 <div class="modal-login active">
                        <span class="modal-text">với các tài khoản mạng xã hội</span>
                        <div class="modal-social">
                            <button class="google">
                                <img src="./assets/imgs/google.svg" alt="google">
                                Google
                            </button>
                            <button class="facebook">
                                <img src="./assets/imgs/facebook.svg" alt="google">
                                Facebook
                            </button>
                        </div>
                        <div class="modal-line">
                            <span>hoặc</span>
                        </div>
                        <form action="" class="form-login-register">
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input required type="email" name="email" id="email" placeholder="Email">
                                <span class="error-email"></span>
                            </div>
                            <div class="form-group">
                                <label for="passwd">Mật khẩu</label>
                                <div class="form-group__wrap">
                                    <input required type="password" name="passwd" id="passwd" placeholder="Mật khẩu">
                                    <i class="fa-regular fa-eye"></i>
                                    <span class="error-email"></span>
                                </div>
                            </div>
                            <div class="form-group">
                                <button class="btn-forget">Quên mật khẩu?</button>
                            </div>
                            <div class="form-group">
                                <button class="btn-cta login" type="submit">Đăng nhập</button>
                            </div>
                        </form>
                    </div>
`;

// check email

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
    btnLogin.classList.add("active");
    btnRegister.classList.remove("active");
    modalLoginRegister.innerHTML = "";
    modalLoginRegister.insertAdjacentHTML("beforeend", htmlLogin);
  });
}
if (btnRegister) {
  btnRegister.addEventListener("click", function (e) {
    btnRegister.classList.add("active");
    btnLogin.classList.remove("active");
    modalLoginRegister.innerHTML = "";
    modalLoginRegister.insertAdjacentHTML("beforeend", htmlRegister);
    inputPasswd = document.querySelector(".form-group__wrap  #passwd");
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