const search = document.querySelector(".search2");
const btn = document.querySelector(".btn2");
const input = document.querySelector(".input");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});
