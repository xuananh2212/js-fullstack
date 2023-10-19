import { client } from "./client.js";
import { handlePicker } from "./picker.js";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
export const root = $("#root");
const loadingEL = $(".loading");
let user = {};
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
        spanEmail.textContent = "Vui lòng nhập đúng định dạng email";
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
        var regex = /^(.{8,20})$/;
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
          spanPasswd.textContent = "Mật khẩu tối thiểu 8 - 20 ký tự";
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
        passwd.value.length >= 8 &&
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
    try {
      loadingEL.classList.remove("is-hidden");
      const { response, data } = await client.post("/auth/register", {
        email,
        password,
        name,
      });
      if (response.ok) {
        if (data.status_code === "SUCCESS") {
          modalTextRegister.innerHTML = "Đăng Kí thành công";
          modalTextRegister.classList.remove("error");
          modalTextRegister.classList.add("success");
          setTimeout(() => {
            activeBtnLogin();
            emailEL.value = email;
            passwd.value = password;
            createToast("Đăng Kí Thành công", 1);
          }, 1000);
        } else {
          createToast("Đăng Kí thất bại", 0);
        }
      } else {
        modalTextRegister.innerHTML = "Email đã tồn tại";
        modalTextRegister.classList.add("error");
        modalTextRegister.classList.remove("success");
        createToast("Email đã tồi tại", 0);
      }
      loadingEL.classList.add("is-hidden");
    } catch (e) {
      createToast("Error 504", 0);
      location.reload();
      loadingEL.classList.add("is-hidden");
    }
  }
  async function handleSignIn(email, password) {
    loadingEL.classList.remove("is-hidden");
    const { data: tokens } = await client.post("/auth/login", {
      email,
      password,
    });
    if (tokens.data) {
      localStorage.setItem("access_token", tokens.data.accessToken);
      localStorage.setItem("refresh_token", tokens.data.refreshToken);
      root.innerHTML = "";
      renderBlogs();
      createToast("Đăng nhập Thành công", 1);
    } else {
      modalTextLogin.innerHTML = "tài khoản và mật khẩu không chính xác";
      modalTextLogin.classList.add("error");
      createToast("Đăng nhập Thất bại", 0);
    }
    loadingEL.classList.add("is-hidden");
  }
}
function handleTime(time) {
  const dateNow = new Date();
  const dateBlog = new Date(time);
  const timeMS = (dateNow.getTime() - dateBlog.getTime()) / 1000;
  if (timeMS < 60) {
    return "Vừa Xong";
  } else if (timeMS < 3600) {
    return `${Math.floor(timeMS / 60)} phút trước`;
  } else if (timeMS < 86400) {
    return `${Math.floor(timeMS / 3600)} giờ trước`;
  } else if (timeMS < 2419200) {
    return `${Math.floor(timeMS / 86400)} ngày trước`;
  } else if (timeMS < 31536000) {
    return `${Math.floor(timeMS / 2419200)} tháng trước`;
  } else {
    return `${Math.floor(timeMS / 31536000)} năm trước`;
  }
}
function formatDate(time) {
  const date = new Date(time);
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return `${day}/${month + 1}/${year}  ${hours}h:${minutes}phút`;
}
function handleStringRegex(content) {
  console.log(2);
  content = " " + content + " ";
  const patternEmail =
    /([a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*)/g;
  content = content.replace(patternEmail, `<a href= "mailto:$1">$1</a>`);
  const patternNumberIphone = /((0|\+84)\d{9})/g;
  content = content.replace(patternNumberIphone, `<a href= "tel:$1">$1</a>`);
  const patternLink =
    /((http|https):\/\/[a-z-_0-9\.]+\.[a-z]{2,}\/(?!watch).*?(\s+))/g;
  content = content.replace(patternLink, `<a href= "$1">$1</a>`);
  const patternYoutube =
    /(((?:http|https):\/\/(?:www.)?(?:youtube.com|youto.be)\/)watch\?v\=(.*?)\s+)/g;
  content = content.replace(
    patternYoutube,
    `<a href= "#"> 
    <iframe src="$2embed/$3" width="420" height="315"></iframe>
    </a>`
  );
  return content;
}

async function handleXSS(content, descEL) {}

async function getBlogs(blogsEL) {
  loadingEL.classList.remove("is-hidden");
  const { data: blogs } = await client.get(`/blogs`);
  blogs.data.sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
  blogs.data.forEach((blog) => {
    var charFirst = blog?.userId?.name.split(/\s+/) || [""];
    var html = `
                 
                      <div class="blog-user">
                          <div class="avatar">${charFirst[
                            charFirst.length - 1
                          ].charAt(0)}</div>
                          <span class="name">${blog?.userId?.name}</span>
                      </div>
                  
                `;
    var htmlDate = ` <div class= "date-time">
                           <span class="time">${handleTime(
                             blog.createdAt
                           )}</span>
                            <span >${formatDate(blog.createdAt)}</span>
                          </div>`;
    const blogItems = document.createElement("div");
    blogItems.className = "blog-items";
    const blogItemsInner = document.createElement("div");
    blogItemsInner.className = "blog-items__inner";
    blogItemsInner.innerHTML = html;
    const contentEl = document.createElement("div");
    contentEl.className = "content";
    const h2El = document.createElement("h2");
    h2El.className = "title";
    const descEL = document.createElement("p");
    descEL.className = "desc";
    h2El.textContent = blog.title;
    var content = handleStringRegex(blog.content);
    // handleXSS(content, descEL);
    var position = content.indexOf("<a");
    while (position !== -1) {
      var contentSlice = content.slice(0, position);
      if (contentSlice) {
        const textNode = document.createTextNode(contentSlice);
        content = content.slice(position + 1);
        descEL.append(textNode);
      }
      const position = content.indexOf("</a>");
      var html = content.slice(0, position + 1);
      descEL.insertAdjacentHTML("beforeend", html);
      content = content.slice(position + 1);
    }
    if (content) {
      const textNode = document.createTextNode(contentSlice);
      descEL.appendChild(textNode);
    }
    descEL.innerHTML = content;
    contentEl.append(h2El);
    contentEl.append(descEL);
    var htmlEl = ` <button class="btn btn-tag">
                            <a href="#!">#${blog.userId.name}</a>
                        </button>`;
    contentEl.insertAdjacentHTML("beforeend", htmlEl);
    blogItemsInner.appendChild(contentEl);
    blogItems.append(blogItemsInner);
    blogItems.insertAdjacentHTML("afterbegin", htmlDate);
    blogsEL.append(blogItems);
  });
  loadingEL.classList.add("is-hidden");
}

async function handleSignout(token) {
  loadingEL.classList.remove("is-hidden");
  const { data } = await client.post("/auth/logout", {}, token);
  if (data.code === 200) {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    renderSignInAndUp();
    loadingEL.classList.add("is-hidden");
    createToast("đăng xuất thành công", 1);
  } else {
    refreshToken().then(async (refresh) => {
      if (refresh.code === 200) {
        const { data } = await client.post(
          "/auth/logout",
          {},
          localStorage.getItem("access_token")
        );
      }
      localStorage.removeItem("access_token");
      localStorage.removeItem("refresh_token");
      renderSignInAndUp();
    });
  }
}
async function refreshToken() {
  const { response, data: refresh } = await client.post("/auth/refresh-token", {
    refreshToken: localStorage.getItem("refresh_token"),
  });
  if (response.ok) {
    console.log(refresh.status_code);
    if (refresh.code === 200) {
      localStorage.setItem("access_token", refresh.data.token.accessToken);
      localStorage.setItem("refresh_token", refresh.data.token.refreshToken);
    }
  }
  return refresh;
}

async function handleNewBlog(
  title,
  content,
  token,
  titleEL,
  contentEL,
  createdAt
) {
  if (!createdAt) {
    const { data } = await client.post("/blogs", { title, content }, token);
    if (data.code === 200) {
      renderBlogs();
      titleEL.value = "";
      contentEL.value = "";
    } else {
      refreshToken().then(async (refresh) => {
        if (refresh.code === 200) {
          const { data } = await client.post(
            "/blogs",
            { title, content },
            localStorage.getItem("access_token")
          );
          renderBlogs();
        } else {
          renderSignInAndUp();
        }
      });
    }
  } else {
    createToast("bạn sẽ đang bài vào" + formatDate(createdAt), 1, 2000);
  }
}

export function createToast(message, status, time = 1600) {
  var html = `<div class="toast">
        <div class="toast-inner">
            <i class="fa-solid icon-toast ${
              status === 1 ? "fa-check" : "fa-xmark"
            }"></i>
            <div class="toast-content">
                <span class="status ${status === 1 ? "success" : "error"}">${
    status === 1 ? "success" : "error"
  }</span>
                <p class="desc">${message}</p>
            </div>
        </div>
    </div>`;
  document.body.insertAdjacentHTML("beforeend", html);
  setTimeout(function () {
    var toast = document.querySelector(".toast");
    toast.remove();
  }, time);
}

async function getUser() {
  const { data: getUser } = await client.get(
    "/users/profile",
    localStorage.getItem("access_token")
  );
  console.log(getUser);
  const user = getUser.data;
  console.log(user);
  const containerEL = document.createElement("div");
  containerEL.className = "container";
  const blogsEL = document.createElement("div");
  blogsEL.className = "blogs";
  containerEL.append(blogsEL);
  root.append(containerEL);
  var charFirst = user?.name?.split(/\s+/) || [""];
  var html = `<div class="blog-user">
                    <div class="avatar">${charFirst[
                      charFirst.length - 1
                    ].charAt(0)}</div>
                    <span class="name">${user?.name}</span>
                </div>
                <form class="form-blogs" autocomplete="false">
                    <div class="form-group">
                        <h2 class="heading-lv2">Bài Viết!</h2>
                        <input type="text" name="title" id="title" placeholder="Please Enter The Title"  required>
                        <textarea name="content" id="content" cols="30" rows="10"
                            placeholder="Please Enter the Content"  required></textarea>
                             <input type="text" class="picker" placeholder="Set Time to post">
                    </div>
                    <div class="form-group btn-cta">
                        <button class="btn btn-new">Write new!</button>
                        <button type="button" class="btn btn-sign-out">Sign Out</button>
                    </div>
                </form>`;
  blogsEL.innerHTML = html;
  handlePicker(".picker");
  getBlogs(blogsEL);
  var form = $(".form-blogs");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const titleEL = $("input#title");
    const contentEL = $("textarea#content");
    const dateEl = $(".picker");
    var createdAt = dateEl.value.trim();
    if (createdAt) {
      const dateNow = new Date();
      const dateBlog = new Date(createdAt);
      dateBlog.setHours(dateNow.getHours());
      dateBlog.setMinutes(dateNow.getMinutes());
      dateBlog.setSeconds(dateNow.getSeconds());
      if (
        dateNow.getDate() === dateBlog.getDate() &&
        dateNow.getMonth() === dateBlog.getMonth() &&
        dateNow.getFullYear() == dateBlog.getFullYear()
      ) {
        createdAt = "";
      } else {
        createdAt = String(dateBlog);
      }
    }

    var title = titleEL.value.trim();
    var content = contentEL.value.trim();
    if (title && content) {
      handleNewBlog(
        title,
        content,
        localStorage.getItem("access_token"),
        titleEL,
        contentEL,
        createdAt
      );
      titleEL.value = "";
      contentEL.value = "";
      dateEl.value = "";
    }
  });
  const btnSignOut = $(".btn-sign-out");
  btnSignOut.addEventListener("click", (e) => {
    handleSignout(localStorage.getItem("access_token"));
  });
}

export function renderBlogs() {
  root.innerHTML = "";
  getUser();
}
