let divToggleVis2 = document.getElementById("spoiler_text2");
let button2 = document.getElementById("spoiler_button2");

button2.onclick = function () {
  if (divToggleVis2.className === "fadeout2") {
    divToggleVis2.className = "fadein2";
  } else {
    divToggleVis2.className = "fadeout2";
  }

  if (button2.innerHTML === "Show Graph") {
    button2.innerHTML = "Hide Graph";
  } else {
    button2.innerHTML = "Show Graph";
  }
};
