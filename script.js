const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
const projectTitle = document.getElementById("day-title");
const projectFolders = [
  "01_expanding_cards",
  "02_progress_steps",
  "03_rotating_navigation",
  "04_hidden_search",
  "05_blurred_loading",
  "06_scroll_animation",
  "07_split_landing_page",
  "08_form_wave_animation",
  "09_sound_board",
  "10_dad_jokes",
  "11_event_key_codes",
  "12_faq_collapse",
  "13_random_choice_picker",
  "14_animated_navigation",
  "15_incrementing_counter",
  "16_drink_water",
  "17_movie_app",
  "18_background_slider",
  "19_theme_clock",
  "20_button_ripple_effect",
  "21_drag_n_drop",
  "22_drawing_app",
  "23_kinetic_css_loader",
  "24_content_placeholder",
  "25_sticky_navbar",
  "26_double_vertical_slider",
];

let projectIndex = 0;

rightBtn.addEventListener("click", () => {
  projectIndex++;
  if (projectIndex > projectFolders.length - 1) {
    projectIndex = 0;
  }
  renderProject();
});

leftBtn.addEventListener("click", () => {
  projectIndex--;
  if (projectIndex < 0) {
    projectIndex = projectFolders.length - 1;
  }
  renderProject();
});

function renderProject() {
  projectTitle.innerHTML = `Day ${projectFolders[projectIndex]
    .replace("_", ": ")
    .replaceAll("_", " ")}`;

  document.getElementById("myFrame").src = projectFolders[projectIndex];
}

renderProject();
