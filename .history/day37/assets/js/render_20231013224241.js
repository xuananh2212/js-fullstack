const 
export function renderUi() {
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
}
