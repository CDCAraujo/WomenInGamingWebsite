const f = document.getElementById("searchBar");
const q = document.getElementById("query");
const google = "https://www.google.com/search?q=site%3A+";
const site = "WGWebsiteglobal\navbar.html";

function submitted(event) {
  event.preventDefault();
  const url = google + site + "+" + q.value;
  const win = window.open(url, "_blank");
  win.focus();
}

f.addEventListener("submit", submitted);
