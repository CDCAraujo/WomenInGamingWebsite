var divToggleVis = document.getElementById('spoiler_text');
var button = document.getElementById('spoiler_button');

button.onclick = function() {
    if (divToggleVis.className === 'fadeout') {
        divToggleVis.className = 'fadein';
    } else {
        divToggleVis.className = 'fadeout';
    }

    if (button.innerHTML === 'Show Spoilers') {
        button.innerHTML = 'Hide Spoilers';
    } else {
        button.innerHTML = 'Show Spoilers';
    }
};