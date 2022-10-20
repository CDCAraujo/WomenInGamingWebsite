/* spoiler button */
let divToggleVis = document.getElementById("spoiler_text");
let button = document.getElementById("spoiler_button");

button.onclick = function () {
  if (divToggleVis.className === "fadeout") {
    divToggleVis.className = "fadein";
  } else {
    divToggleVis.className = "fadeout";
  }

  if (button.innerHTML === "Show Graph") {
    button.innerHTML = "Hide Graph";
  } else {
    button.innerHTML = "Show Graph";
  }
};
