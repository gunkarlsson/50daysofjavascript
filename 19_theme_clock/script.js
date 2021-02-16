const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggle = document.querySelector(".toggle");

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

toggle.addEventListener("click", (e) => {
  const html = document.querySelector("html");

  html.classList.toggle("dark");
  toggle.innerText = html.classList.contains("dark")
    ? "Light mode"
    : "Dark mode";
});

function digitalClock(time) {
  //   const month = time.getMonth();
  //   const day = time.getDay();
  //   const date = time.getDate();

  timeEl.innerHTML = `${time.getHours()}:${
    time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()
  }`;
  dateEl.innerHTML = `${days[time.getDay()]}, ${
    months[time.getMonth()]
  } ${time.getDate()}`;
}

function analogueClock(time) {
  const hours = time.getHours() % 12;
  const hourNeedleRotation = scale(hours, 0, 12, 0, 360);
  const minuteNeedleRotation = scale(time.getMinutes(), 0, 60, 0, 360);
  const secondNeedleRotation = scale(time.getSeconds(), 0, 60, 0, 360);

  hourEl.style.transform = `translate(-50%, -100%) rotate(${hourNeedleRotation}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${minuteNeedleRotation}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${secondNeedleRotation}deg)`;
}

function setTime() {
  const time = new Date();
  analogueClock(time);
  digitalClock(time);
}

//Map a range of numbers to another range of numbers
function scale(num, in_min, in_max, out_min, out_max) {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

setTime();
setInterval(setTime, 1000);
