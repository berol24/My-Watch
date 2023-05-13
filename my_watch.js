// heure de paris
let $watchRight = document.querySelector('.watch-right');
let $principalTitle = document.querySelector('.watch-right .principal-title');
let $greetingParis = document.querySelector('.watch-right .paris h2');
let $hourParis = document.querySelectorAll('.watch-right .paris .hour-paris span');
let $dayParis = document.querySelectorAll(".watch-right .paris .date-paris span");


function watchParis() {

   let $date = new Date();

   let h = $date.getHours();
   let min = $date.getMinutes();
   let sec = $date.getSeconds();

   if (sec < 10) {
      sec = "0" + sec;
   }
   if (min < 10) {
      min = "0" + min;
   }
   if (h < 10) {
      h = "0" + h;
   }

   if (h < 12) {
      $greetingParis.innerHTML = "Bonjour";
   }

   if (h >= 12 && h < 18) {
      $greetingParis.innerHTML = "Bon-après-midi";

   }

   if (h >= 18 && h < 24) {
      $greetingParis.innerHTML = "Bonsoir";
      $greetingParis.style.color = "black";
      $watchRight.style.backgroundImage = "url('paris-nuit.jpg')";
      $watchRight.style.backgroundPosition = "center center";
      $watchRight.style.backgroundSize = 'cover';
      $principalTitle.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
      $principalTitle.style.color = "white";

      for (let i = 0; i < $hourParis.length; i++) {
         if (i == 0 || i == 2 || i == 4) {
            $hourParis[i].style.color = "white";
            $hourParis[i].style.backgroundColor = "black";
            $hourParis[i].style.borderTop = "20px solid white";
         }

      }

      for (let i = 0; i < $dayParis.length; i++) {
         $dayParis[i].style.color = 'white';

      }


   }


   $hourParis[0].innerHTML = h;
   $hourParis[2].innerHTML = min;
   $hourParis[4].innerHTML = sec;


   const days = ["Dimanche", "lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]

   let $dayOfWeek = days[$date.getDay()];
   let day = $date.getDate();
   let month = $date.getMonth() + 1;
   let year = $date.getFullYear();


   if (month < 10) {
      month = '0' + month;
   }
   if (day < 10) {
      day = '0' + day;
   }


   $dayParis[0].innerHTML = $dayOfWeek;
   $dayParis[1].innerHTML = day;
   $dayParis[2].innerHTML = month;
   $dayParis[3].innerHTML = year;


}

setInterval(watchParis, 1000);;

window.addEventListener('DOMContentLoaded', watchParis);


// heure de New-York

let $watchLeft1 = document.querySelector('.watch-left1');
let $secondaryTitle1 = document.querySelector('.watch-left1 .secondary-title1');
let $hourNewYork = document.querySelectorAll('.watch-left1 .new-york .hour-new-york span');
let $dayNewYork = document.querySelectorAll(".watch-left1 .new-york .date-new-york span");
let $greetingNewYork = document.querySelector('.watch-left1 .new-york h2');


function watchNewYork() {

   let $date = new Date();

   let h = $date.getHours() - 6;
   let min = $date.getMinutes();
   let sec = $date.getSeconds();

   if (sec < 10) {
      sec = "0" + sec;
   }
   if (min < 10) {
      min = "0" + min;
   }
   if (h < 10) {
      h = "0" + h;
   }

   if (h < 12) {
      $greetingNewYork.innerHTML = "Bonjour";

   }

   if (h >= 12 && h < 18) {
      $greetingNewYork.innerHTML = "Bon-après-midi";
   }

   if (h >= 18 && h < 24) {
      $greetingNewYork.innerHTML = "Bonsoir";
      $greetingNewYork.style.color = "black";
      $watchLeft1.style.backgroundImage = "url('new-york-nuit.jpg')";
      $watchLeft1.style.backgroundPosition = "center center";
      $watchLeft1.style.backgroundSize = 'cover';
      $secondaryTitle1.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
      $secondaryTitle1.style.color = "white";


      for (let i = 0; i < $hourNewYork.length; i++) {
         if (i == 0 || i == 2 || i == 4) {
            $hourNewYork[i].style.color = "white";
            $hourNewYork[i].style.backgroundColor = "black";
            $hourNewYork[i].style.borderTop = "10px solid white";
         }

      }

      for (let i = 0; i < $dayNewYork.length; i++) {
         $dayNewYork[i].style.color = 'white';

      }


   }


   $hourNewYork[0].innerHTML = h;
   $hourNewYork[2].innerHTML = min;
   $hourNewYork[4].innerHTML = sec;


   const days = ["Dimanche", "lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]

   let $dayOfWeek = days[$date.getDay()];
   let day = $date.getDate();
   let month = $date.getMonth();
   let year = $date.getFullYear();


   if (month < 10) {
      month = '0' + month;
   }
   if (day < 10) {
      day = '0' + day;
   }


   $dayNewYork[0].innerHTML = $dayOfWeek;
   $dayNewYork[1].innerHTML = day;
   $dayNewYork[2].innerHTML = month;
   $dayNewYork[3].innerHTML = year;


}

setInterval(watchNewYork, 1000);;

window.addEventListener('DOMContentLoaded', watchNewYork);


// Heure de yaoundé


let $watchLeft2 = document.querySelector('.watch-left2');
let $secondaryTitle2 = document.querySelector('.watch-left2 .secondary-title2');
let $hourYaounde = document.querySelectorAll('.watch-left2 .yaounde .hour-yaounde span');
let $dayYaounde = document.querySelectorAll(".watch-left2 .yaounde .date-yaounde span");
let $greetingYaounde = document.querySelector('.watch-left2 .yaounde h2');

console.log($watchLeft2)

function watchYaounde() {

   let $date = new Date();

   let h = $date.getHours() - 1;
   let min = $date.getMinutes();
   let sec = $date.getSeconds();

   if (sec < 10) {
      sec = "0" + sec;
   }
   if (min < 10) {
      min = "0" + min;
   }
   if (h < 10) {
      h = "0" + h;
   }

   if (h < 12) {
      $greetingYaounde.innerHTML = "Bonjour";

   }

   if (h >= 12 && h < 18) {
      $greetingYaounde.innerHTML = "Bon-après-midi";
   }

   if (h >= 18 && h < 24) {
      $greetingYaounde.innerHTML = "Bonsoir";
      $greetingYaounde.style.color = "black";
      $watchLeft2.style.backgroundImage = "url('yaounde-nuit.jpg')";
      $watchLeft2.style.backgroundPosition = "center center";
      $watchLeft2.style.backgroundSize = 'cover';
      $secondaryTitle2.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
      $secondaryTitle2.style.color = "white";
      for (let i = 0; i < $hourYaounde.length; i++) {
         if (i == 0 || i == 2 || i == 4) {
            $hourYaounde[i].style.color = "white";
            $hourYaounde[i].style.backgroundColor = "black";
            $hourYaounde[i].style.borderTop = "10px solid white";
         }

      }

      for (let i = 0; i < $dayYaounde.length; i++) {
         $dayYaounde[i].style.color = 'white'

      }


   }


   $hourYaounde[0].innerHTML = h;
   $hourYaounde[2].innerHTML = min;
   $hourYaounde[4].innerHTML = sec;


   const days = ["Dimanche", "lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"]

   let $dayOfWeek = days[$date.getDay()];
   let day = $date.getDate();
   let month = $date.getMonth() + 1;
   let year = $date.getFullYear();


   if (month < 10) {
      month = '0' + month
   }
   if (day < 10) {
      day = '0' + day
   }


   $dayYaounde[0].innerHTML = $dayOfWeek;
   $dayYaounde[1].innerHTML = day;
   $dayYaounde[2].innerHTML = month;
   $dayYaounde[3].innerHTML = year;


}

setInterval(watchYaounde, 1000);;

window.addEventListener('DOMContentLoaded', watchYaounde);