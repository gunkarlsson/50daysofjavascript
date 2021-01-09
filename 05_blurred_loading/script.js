const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");
const finishedText = document.querySelector(".finishedText");

let progress = 0;
let interval = setInterval(blurring, 30);

function blurring() {
  progress++;
  if (progress > 99) {
    clearInterval(interval);
    finishedText.classList.add("active");
  }

  loadText.innerText = `${progress}%`;
  loadText.style.opacity = scale(progress, 30, 100, 1, 0);
  bg.style.filter = `blur(${scale(progress, 0, 100, 30, 0)}px)`;
}

// (number of load, in min = 0%, in max = 100%, out min = opacity 1, out max = opacity 0)
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
