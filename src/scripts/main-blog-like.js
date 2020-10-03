const mainlikeButton = document.querySelectorAll(".main-blog-container__like");
const mainlikesCount = document.querySelectorAll(".main-like-container__count");
const mainsvgHeart = document.querySelectorAll(".main-like-container__svg");

for (let i = 0; i < mainlikeButton.length; i++) {
  mainlikeButton[i].addEventListener("click", () => {
    mainsvgHeart[i].classList.toggle("like");
    mainlikesCount[i].classList.toggle("like");
  });
}
