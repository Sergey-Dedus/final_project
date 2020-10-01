const toggle = document.querySelector(".menu-mobile");

toggle.addEventListener("click", function () {
  //   const mainContent = document.querySelector("main");
  const nav = document.querySelector(".menu__list2");
  const psevdoBtn = document.querySelector(".menu-mobile_middle-line");

  this.classList.toggle("is-active");
  //   mainContent.classList.toggle("is-active");
  nav.classList.toggle("is-active");
  psevdoBtn.classList.toggle("is-active");
  document.body.classList.toggle("is-active");
});
