import menu from "./dom/menu.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  menu(".panel-btn", ".panel", ".menu a");
  console.log("funciona");
});
