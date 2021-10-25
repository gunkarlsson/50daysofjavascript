const container = document.getElementById("container");
// const colors = ["#0F947E", "#4DFFE1", "#2DE0C2", "#942A00", "#E0602D"];
const colors = ["#0F947E", "#4DFFE1", "#2DE0C2", "#C20000", "#F55600"];
// const colors = ["#01B8F5", "#92EDFF", "#F5CC00", "#C20000", "#F55600"];
const SQUARES = 600;

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => setColor(square));
  square.addEventListener("mouseout", () => removeColor(square));

  container.appendChild(square);
}

function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}

function removeColor(element) {
  element.style.background = "rgb(38, 38, 38)";
  element.style.boxShadow = "0 0 2px #000";
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
