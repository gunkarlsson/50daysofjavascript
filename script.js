const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const dayTitle = document.getElementById("day-title");
const folders = [
  "01_expanding_cards",
  "02_progress_steps",
  "03_rotating_navigation",
];
let slideIndex = 0;

rightBtn.addEventListener("click", () => {
  console.log("right");
  slideIndex++;
  if (slideIndex > slides.length - 1) {
    slideIndex = 0;
  }
  dayTitle.innerHTML = `Day ${folders[slideIndex]
    .replace("_", ": ")
    .replaceAll("_", " ")}`;

  document.getElementById("myFrame").src = folders[slideIndex];
});

leftBtn.addEventListener("click", () => {
  console.log("left");
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  dayTitle.innerHTML = `Day ${slideIndex + 1}`;

  document.getElementById("myFrame").src = folders[slideIndex];
});
