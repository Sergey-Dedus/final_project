const likeButton = document.querySelectorAll(".blog-container__like");
const likesCount = document.querySelectorAll(".like-container__count");
const svgHeart = document.querySelectorAll(".like-container__svg");

for (let i = 0; i < likeButton.length; i++) {
  likeButton[i].addEventListener("click", () => {
    svgHeart[i].classList.toggle("like");
    likesCount[i].classList.toggle("like");
  });
}
