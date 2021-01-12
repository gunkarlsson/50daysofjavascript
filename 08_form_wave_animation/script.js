const labels = document.querySelectorAll(".form-control label");
const test = document.querySelector(".test");

labels.forEach((label) => {
  label.innerHTML = label.innerText
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 35}ms">${letter}</span>`
    )
    .join("");
});

let arr = [
  {
    firstName: "Gun",
    lastName: "Karlsson",
  },
  {
    firstName: "Albin",
    lastName: "Ljunghusen",
  },
];
