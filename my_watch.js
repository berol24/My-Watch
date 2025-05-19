
const days = [
  "Dimanche", "Lundi", "Mardi", "Mercredi",
  "Jeudi", "Vendredi", "Samedi"
];
const months = [
  "Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
  "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"
];

function updateClock({
  sectionSelector,
  hourOffset = 0,
  nightBg = "",
  nightTitle = "",
  nightGreetingColor = "black",
  nightTitleBg = "rgba(0,0,0,0.7)",
  nightTitleColor = "white"
}) {
  const section = document.querySelector(sectionSelector);
  if (!section) return;

  const title = section.querySelector("h1");
  const greeting = section.querySelector("h2");
  const hourSpans = section.querySelectorAll(".watch-hour span");
  const dateSpans = section.querySelectorAll(".watch-date span");

  let now = new Date();

  // Calcul de l'heure locale
  let h = now.getHours() + hourOffset;
  if (h < 0) h += 24;
  if (h >= 24) h -= 24;
  let min = now.getMinutes();
  let sec = now.getSeconds();

  // Formattage
  h = h < 10 ? "0" + h : h;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  // Affichage de l'heure
  if (hourSpans.length >= 5) {
    hourSpans[0].innerHTML = h;
    hourSpans[2].innerHTML = min;
    hourSpans[4].innerHTML = sec;
  }

  // Affichage du jour et de la date
  let dayOfWeek = days[now.getDay()];
  let day = now.getDate();
  let month = now.getMonth();
  let year = now.getFullYear();

  if (dateSpans.length >= 4) {
    dateSpans[0].innerHTML = dayOfWeek;
    dateSpans[1].innerHTML = day < 10 ? "0" + day : day;
    dateSpans[2].innerHTML = months[month];
    dateSpans[3].innerHTML = year;
  }

  // Définir le message de salutation et le style selon l'heure
  const hNum = parseInt(h, 10);
  let isNight = false;

  if (hNum < 12) {
    greeting.innerHTML = "Bonjour";
    greeting.style.color = "";
    section.style.backgroundImage = "";
    if (title) {
      title.style.backgroundColor = "";
      title.style.color = "";
    }
    hourSpans.forEach((span, i) => {
      if (i === 0 || i === 2 || i === 4) {
        span.style.color = "";
        span.style.backgroundColor = "";
        span.style.borderTop = "";
      }
    });
    dateSpans.forEach(span => span.style.color = "");
  } else if (hNum < 18) {
    greeting.innerHTML = "Bon-après-midi";
    greeting.style.color = "";
    section.style.backgroundImage = "";
    if (title) {
      title.style.backgroundColor = "";
      title.style.color = "";
    }
    hourSpans.forEach((span, i) => {
      if (i === 0 || i === 2 || i === 4) {
        span.style.color = "";
        span.style.backgroundColor = "";
        span.style.borderTop = "";
      }
    });
    dateSpans.forEach(span => span.style.color = "");
  } else {
    greeting.innerHTML = "Bonsoir";
    greeting.style.color = nightGreetingColor;
    if (nightBg) {
      section.style.backgroundImage = `url('${nightBg}')`;
      section.style.backgroundPosition = "center center";
      section.style.backgroundSize = "cover";
    }
    if (title) {
      title.style.backgroundColor = nightTitleBg;
      title.style.color = nightTitleColor;
    }
    hourSpans.forEach((span, i) => {
      if (i === 0 || i === 2 || i === 4) {
        span.style.color = "white";
        span.style.backgroundColor = "black";
        span.style.borderTop = "10px solid white";
      }
    });
    dateSpans.forEach(span => span.style.color = "white");
  }
}

// --- Initialisation pour chaque ville ---
function startClocks() {
  // Paris
  setInterval(() => updateClock({
    sectionSelector: ".watch-paris",
    hourOffset: 0,
    nightBg: "paris-nuit.jpg"
  }), 1000);
  updateClock({
    sectionSelector: ".watch-paris",
    hourOffset: 0,
    nightBg: "paris-nuit.jpg"
  });

  // New-York
  setInterval(() => updateClock({
    sectionSelector: ".watch-ny",
    hourOffset: -6,
    nightBg: "new-york-nuit.jpg"
  }), 1000);
  updateClock({
    sectionSelector: ".watch-ny",
    hourOffset: -6,
    nightBg: "new-york-nuit.jpg"
  });

  // Yaoundé
  setInterval(() => updateClock({
    sectionSelector: ".watch-yaounde",
    hourOffset: -1,
    nightBg: "yaounde-nuit.jpg"
  }), 1000);
  updateClock({
    sectionSelector: ".watch-yaounde",
    hourOffset: -1,
    nightBg: "yaounde-nuit.jpg"
  });
}

window.addEventListener("DOMContentLoaded", startClocks);
