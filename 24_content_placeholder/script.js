const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bg = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2000);

function getData() {
  header.innerHTML =
    '<img src="https://images.unsplash.com/photo-1564772255985-c7ca28689bae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80" alt="" />';
  title.innerHTML = "Lorem ipsum dolor sit amet.";
  excerpt.innerHTML =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis cumque illum aspernatur praesentium nihil alias!";
  profile_img.innerHTML =
    '<img src="https://images.unsplash.com/photo-1570158268183-d296b2892211?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=300&h=300" alt="" />';
  name.innerHTML = "John Doe";
  date.innerHTML = "Feb 25, 2021";

  animated_bg.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg"));
}
