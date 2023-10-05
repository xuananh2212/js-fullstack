const $ = document.querySelector(document);
const $$ = document.querySelectorAll(document);
export const posts = $(".posts");

export function returnHtml(urlAvatar, userName) {
  return `<div class="post-user">
                    <div class="avatar-wrap">
                        <img src="./assets/imgs/avatar/anh_an.png" alt="" class="avatar">
                    </div>
                    <span class="user-name">Hoàng An</span>
                </div>
                <div class="post-content">
                    <h2 class="title">Học để làm giàu!</h2>
                    <figcaption class="post-img top">
                        <img src="./assets/imgs/imgs_post/img_post_1.jpg" alt="">
                    </figcaption>
                    <p class="post-desc">
                    </p>
                    <figcaption class="post-img bottom">
                        <img src="./assets/imgs/imgs_post/img_post_2.jpg" alt="">
                    </figcaption>
                    <span class="post-category">Category: <span class="post-category-value">Thế giới</span></span>
                </div>`;
}

export function renderUi(data) {
  if (data.length > 0) {
    const postItems = document.createElement("div");
    postItems.classList.add("posts-items");
    var html = ``;
  }
}
