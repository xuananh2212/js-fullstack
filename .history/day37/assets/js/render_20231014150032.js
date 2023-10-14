import { client } from "./client.js";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
export const root = $("#root");
const loadingEL = $(".loading");
export function renderSignInAndUp() {
  var html = `<nav class="nav-bar">
            <button class="btn">
                Đăng nhập
                <i class="fa-regular fa-user"></i>
            </button>
            </div>
        </nav>
        <div class="modal">
            <div class="modal-overlay"></div>
            <div class="modal-content">
                <div class="modal-group-btn">
                    <button class="btn-login active">Đăng nhập</button>
                    <button class="btn-regsiter">Đăng Kí</button>
                </div>
                <div class="modal-login-register">
                    <span class="modal-text">với các tài khoản mạng xã hội</span>
                    <span class="modal-text-register"></span>
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
                        <span class="modal-text-login"></span>
                    </div>
                    <form action="" class="form-login-register">
                        <div class="form-group hidden">
                            <label for="fullName">Họ và Tên</label>
                            <input type="text" name="full-name" class="full-name" id="full-name"
                                placeholder="Họ và Tên">
                            <span class="error-name"></span>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input required type="email" name="email" class="email" id="email" placeholder="Email">
                            <span class="error-email"></span>
                        </div>
                        <div class="form-group">
                            <label for="passwd">Mật khẩu</label>
                            <div class="form-group__wrap">
                                <div class="form-group__wrap__passwd">
                                    <input required type="password" class="passwd" name="passwd" id="passwd"
                                        placeholder="Mật khẩu">
                                    <i class="fa-regular fa-eye"></i>
                                </div>
                                <span class="error-passwd"></span>
                            </div>
                        </div>
                        <div class="form-group">
                            <button class="btn-forget">Quên mật khẩu?</button>
                        </div>
                        <div class="form-group">
                            <p class="desc hidden">
                                Bằng cách đăng ký tài khoản, bạn cũng đồng thời chấp nhận mọi
                                <a href="#!" class="link"> điều kiện về qui
                                    định và chính sách của Dân trí
                                </a>
                            </p>
                        </div>
                        <div class="form-group">
                            <button class="btn-cta">Đăng nhập</button>
                        </div>
                    </form>
                </div>

            </div>
        </div>
        </div>`;
  root.innerHTML = html;
  const blogsEL = document.createElement("div");
  blogsEL.className = "blogs";
  getBlogs(blogsEL);
  root.append(blogsEL);
  const modal = $(".modal");
  const overlay = $(".modal-overlay");
  const modalText = $(".modal-text");
  const modalRegister = $(".modal-register");
  const modalLoginRegister = $(".modal-login-register");
  const modalSocial = $(".modal-social");
  const modalLogin = $(".modal-login");
  const modalTextRegister = $(".modal-text-register");
  const modalTextLogin = $(".modal-text-login");
  const form = $(".form-login-register");
  const btn = $(".btn");
  const btnRegister = $(".btn-regsiter");
  const btnForget = $(".btn-forget");
  const btnLogin = $(".btn-login");
  var inputPasswd = $(".form-group__wrap  #passwd");
  const eye = $(".form-login-register .fa-regular.fa-eye");
  const formGroupName = $("#full-name").parentElement;
  const formGroupDesc = $(".form-group .desc");
  const inputAll = [...$$(".form-login-register input")];
  var spanPasswd = $(".error-passwd");
  var spanEmail = $(".error-email");
  var spanFullName = $(".error-name");
  const emailEL = $("input#email");
  const passwd = $("input#passwd");
  const fullName = $("input#full-name");
  const btnCta = $(".btn-cta");

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
    if (emailEL.value === null || emailEL.value === "") {
      spanEmail.textContent = "vui lòng nhập thông tin";
      emailEL.classList.add("error");
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

  if (emailEL) {
    var regex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
    emailEL.addEventListener("blur", checkErrorAll);
    emailEL.addEventListener("input", function (e) {
      if (this.value === null || this.value === "") {
        spanEmail.textContent = "vui lòng nhập thông tin";
        emailEL.classList.add("error");
      } else if (regex.test(this.value)) {
        spanEmail.textContent = "";
        emailEL.classList.remove("error");
      } else {
        spanEmail.textContent = "Vui lòng nhập đúng định dạng emailEL";
        emailEL.classList.add("error");
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
          if (emailEL.value === "" || emailEL.value === null) {
            emailEL.classList.add("error");
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
          if (emailEL.value === "" || emailEL.value === null) {
            emailEL.classList.add("error");
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

        emailEL.classList.add("error");
        fullName.classList.add("error");
      }
    });
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var email = emailEL.value;
    var password = passwd.value;
    var name = fullName.value;
    if (btnRegister.classList.contains("active")) {
      if (
        passwd.value.length >= 6 &&
        fullName.value !== "" &&
        fullName.value !== null
      ) {
        handleSignUp(email, password, name);
      }
    } else {
      handleSignIn(email, password);
    }
  });
  async function handleSignUp(email, password, name) {
    loadingEL.classList.remove("is-hidden");
    const { data } = await client.post("/auth/register", {
      email,
      password,
      name,
    });
    if (data.status_code === "SUCCESS") {
      modalTextRegister.innerHTML = "Đăng Kí thành công";
      modalTextRegister.classList.remove("error");
      modalTextRegister.classList.add("success");
      setTimeout(() => {
        activeBtnLogin();
        emailEL.value = email;
        passwd.value = password;
      }, 1000);
    } else {
      modalTextRegister.innerHTML = "Email đã tồn tại";
      modalTextRegister.classList.add("error");
    }
    loadingEL.classList.add("is-hidden");
  }
  async function handleSignIn(email, password) {
    loadingEL.classList.remove("is-hidden");
    const { data: tokens } = await client.post("/auth/login", {
      email,
      password,
    });
    if (tokens.data) {
      localStorage.setItem("data", JSON.stringify(tokens.data));
      root.innerHTML = "";
      renderBlogs();
    } else {
      modalTextLogin.innerHTML = "tài khoản và mật khẩu không chính xác";
      modalTextLogin.classList.add("error");
    }
    loadingEL.classList.add("is-hidden");
  }
}

async function getBlogs(blogsEL, query = {}) {
  console.log(query);
  const queryString = new URLSearchParams(query).toString();
  const { data: blogs } = await client.get(`/blogs/${queryString}`);
  blogs.data.forEach((blog) => {
    var charFirst = blog.userId.name.split(/\s+/);
    var html = ` <div class="blog-items">
                    <div class="blog-user">
                        <div class="avatar">${charFirst[
                          charFirst.length - 1
                        ].charAt(0)}</div>
                        <span class="name">${blog.userId.name}</span>
                    </div>
                    <div class="content">
                        <h2 class="title">${blog.title}</h2>
                        <p class="desc">${blog.content}</p>
                        <button class="btn btn-tag">
                            <a href="#!">#${blog.userId.name}</a>
                        </button>
                    </div>
                </div>`;
    blogsEL.insertAdjacentHTML("beforeend", html);
  });
}

async function handleSignout(token) {
  const { response } = await client.post("/logout", {}, token);
  if (response.ok) {
    localStorage.removeItem("data");
    renderSignInAndUp();
  }
}

async function handleNewBlog(title, content, token, titleEL, contentEL) {
  const { response } = await client.post("/blogs", { title, content }, token);
  if (response.ok) {
    var object = {
      _sort: "_id",
      _order: "desc",
    };
    renderBlogs(object);
    titleEL.value = "";
    contentEL.value = "";
  }
}

export function renderBlogs(queryObject) {
  root.innerHTML = "";
  const user =
    localStorage.getItem("data") && JSON.parse(localStorage.getItem("data"));
  const containerEL = document.createElement("div");
  containerEL.className = "container";
  const blogsEL = document.createElement("div");
  blogsEL.className = "blogs";
  containerEL.append(blogsEL);
  root.append(containerEL);
  var charFirst = user?.name?.split(/\s+/);
  var html = `<div class="blog-user">
                    <div class="avatar">${charFirst[
                      charFirst.length - 1
                    ].charAt(0)}</div>
                    <span class="name">${user.name}</span>
                </div>
                <form class="form-blogs" autocomplete="false">
                    <div class="form-group">
                        <h2 class="heading-lv2">Vui Lòng Nhập Tiêu Đề Bài Viết!</h2>
                        <input type="text" name="title" id="title" placeholder="Please Enter The Title"  required>
                        <textarea name="content" id="content" cols="30" rows="10"
                            placeholder="Please Enter the Content"  required></textarea>
                    </div>
                    <div class="form-group btn-cta">
                        <button class="btn btn-new">Write new!</button>
                        <button type="button" class="btn btn-sign-out">Sign Out</button>
                    </div>
                </form>`;
  blogsEL.innerHTML = html;
  var query = queryObject;
  getBlogs(blogsEL, user, query);
  var form = $(".form-blogs");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const titleEL = $("input#title");
    const contentEL = $("textarea#content");
    var title = titleEL.value.trim();
    var content = contentEL.value.trim();
    if (title && content) {
      handleNewBlog(title, content, user.accessToken, titleEL, contentEL);
    }
  });
  const btnSignOut = $(".btn-sign-out");
  btnSignOut.addEventListener("click", (e) => {
    handleSignout(user.accessToken);
  });
}
