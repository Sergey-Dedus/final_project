import "./test.js";
import "./menu-bar.js";
import "../sass/index.scss";
import "./main-slider.js";
import "./mobile-menu-bar.js";
import "./message-bar.js";
import "./join-us-bar.js";
import "./seasons-produce-slider.js";
import "./about-slider.js";
import "./products_slider.js";
import "./login-bar.js";
import "./home_produce-slider.js";
import "./home_main-slider.js";
import "./testjs.js";

const helloWorld = "test hello";
const t = () => {
  console.log("test console");
};
// =====================================
import { PostForm } from "./PostForm.js";
const forma = new PostForm(document.querySelector("body"));
forma.render();
// =======================================
import { PostFormFooter } from "./PostFormFooter.js";
const forms = new PostFormFooter(document.querySelector("body"));
forms.render();

// =======================================
import { PostFormContacts } from "./PostFormContacts.js";
const formc = new PostFormContacts(document.querySelector("body"));
formc.render();
