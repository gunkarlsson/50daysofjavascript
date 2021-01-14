const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerHTML = sound;

  btn.addEventListener("click", () => {
    stopSongs();
    const soundElement = document.getElementById(sound);
    soundElement.volume = 0.2;
    soundElement.play();
    btn.innerHTML = sound + "👏";
  });

  document.getElementById("buttons").appendChild(btn);
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);

    song.pause();
    song.currentTime = 0;
  });
}
