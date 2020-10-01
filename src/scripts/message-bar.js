const toggleSms = document.querySelector(".message-bar");
const toggleClose = document.querySelector(".message-window__close-btn");
toggleSms.addEventListener("click", function () {
  const navSms = document.querySelector(".message-window");

  navSms.classList.toggle("is-active");
});
// =========close============
toggleClose.addEventListener("click", function () {
  const navSms = document.querySelector(".message-window.is-active");
  navSms.classList.remove("is-active");
});
