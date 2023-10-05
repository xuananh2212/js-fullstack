const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
export const posts = $(".posts");
export const loadWrap = $(".load-wrap");

export function returnHtml(
  { title, urlImgTop, urlImgBottom, desc, type },
  { userName, urlAvatar },
  categoryName
) {
  return `<div class="post-user">
                    <div class="avatar-wrap">
                        <img src="${urlAvatar}" alt="" class="avatar">
                    </div>
                    <span class="user-name">${userName}</span>
                </div>
                ${
                  type.length > 0
                    ? `<div class= "type">${type
                        .map((item) => `<a href= "#!">${item}</a>`)
                        .join("")}</div>`
                    : ""
                }
                <div class="post-content">
                    <h2 class="title">${title}</h2>
                    <figcaption class="post-img top">
                        <img src="${urlImgTop}" alt="">
                    </figcaption>
                    <p class="post-desc">
                    ${desc}
                    </p>
                    <figcaption class="post-img bottom">
                        <img src="${urlImgBottom}" alt="">
                    </figcaption>
                    <span class="post-category">Category: 
                       <span class="post-category-value">
                                   ${categoryName}
                       </span>
                    </span>
                </div>`;
}

export function renderUi(datas, users, categories) {
  if (datas.length > 0) {
    datas.forEach((data) => {
      const postItems = document.createElement("div");
      postItems.classList.add("posts-items");
      const { userId, categoryId } = data;
      const userFind = users.find((user) => user.id === userId);
      const categoryFind = categories.find(
        (category) => categoryId === category.id
      );
      var html = returnHtml(data, userFind, categoryFind.categoryName);
      postItems.innerHTML = html;
      posts.appendChild(postItems);
    });
  }
}
