const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
export const posts = $(".posts");

export function returnHtml(
  { urlAvatar, title, urlImgTop, urlImgBottom },
  categoryName,
  userName
) {
  return `<div class="post-user">
                    <div class="avatar-wrap">
                        <img src="${urlAvatar}" alt="" class="avatar">
                    </div>
                    <span class="user-name">${userName}</span>
                </div>
                <div class="post-content">
                    <h2 class="title">${title}</h2>
                    <figcaption class="post-img top">
                        <img src="${urlImgTop}" alt="">
                    </figcaption>
                    <p class="post-desc">
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
  console.log(datas, users, categories);
  if (datas.length > 0) {
    const postItems = document.createElement("div");
    postItems.classList.add("posts-items");
    datas.forEach((data) => {
      const { userId, categoryId } = data;
      console.log(userId, categoryId);
      const userFind = users.find((user) => user.userName === userId);
      const categoryFind = categories.find(
        (category) => categoryId === category.categoryName
      );
      var html = renderUi(data, userFind.userName, categoryFind.categoryName);
      postItems.innerHTML = html;
      posts.appendChild(postItems);
    });
  }
}
