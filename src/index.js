import css from "./styles.css";
import menuList from "./menu.json";
import menuTemplate from "./menu.hbs";
console.log(menuList);
console.log(menuTemplate);

const menuItem = menuTemplate(menuList);
console.log(menuItem);

const menu = document.querySelector(".js-menu");
menu.insertAdjacentHTML("afterbegin", menuItem);

const Theme = {
  LIGHT: "light-theme",
  DARK: "dark-theme",
};

const switchContr = document.querySelector(".theme-switch__toggle");
const body = document.querySelector("body");

if (localStorage.getItem("theme")) {
  body.classList.add(Theme.DARK);
  switchContr.checked = true;
}

switchContr.addEventListener("change", (event) => {
  if (event.target.checked) {
    body.classList.add(Theme.DARK);
    body.classList.remove(Theme.LIGHT);
    localStorage.setItem("theme", "!");
  } else {
    body.classList.add(Theme.LIGHT);
    body.classList.remove(Theme.DARK);
    localStorage.removeItem("theme");
  }
});
