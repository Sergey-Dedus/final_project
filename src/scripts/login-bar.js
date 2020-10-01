const toggleLogin = document.querySelector(".log-in");
const toggleLoginClose = document.querySelector(".login-bar__close");
toggleLogin.addEventListener("click", function () {
  const loginMenu = document.querySelector(".login-bar");

  loginMenu.classList.toggle("is-active");
});
// =========close============
toggleLoginClose.addEventListener("click", function () {
  const loginMenu = document.querySelector(".login-bar.is-active");
  loginMenu.classList.remove("is-active");
});

// ==== mobile version
const toggleLoginMobile = document.querySelector(".log-mobile");
const toggleLoginCloseMobile = document.querySelector(".login-bar__close");
toggleLoginMobile.addEventListener("click", function () {
  const loginMenuMobile = document.querySelector(".login-bar");

  loginMenuMobile.classList.toggle("is-active");
});
// =========close============
toggleLoginCloseMobile.addEventListener("click", function () {
  const loginMenuMobile = document.querySelector(".login-bar.is-active");
  loginMenuMobile.classList.remove("is-active");
});
