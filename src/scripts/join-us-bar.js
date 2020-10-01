const toggleJoin = document.querySelector(".join");
const toggleClose = document.querySelector(".close-join");
toggleJoin.addEventListener("click", function () {
  const joinMenu = document.querySelector(".join-bar");

  joinMenu.classList.toggle("is-active");
});
// =========close============
toggleClose.addEventListener("click", function () {
  const joinMenu = document.querySelector(".join-bar.is-active");
  joinMenu.classList.remove("is-active");
});

// ==== mobile version
const toggleJoinMobile = document.querySelector(".join-mobile");
const toggleCloseMobile = document.querySelector(".close-join");
toggleJoinMobile.addEventListener("click", function () {
  const joinMenuMobile = document.querySelector(".join-bar");

  joinMenuMobile.classList.toggle("is-active");
});
// =========close============
toggleCloseMobile.addEventListener("click", function () {
  const joinMenuMobile = document.querySelector(".join-bar.is-active");
  joinMenuMobile.classList.remove("is-active");
});
