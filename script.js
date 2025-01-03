

let H = document.querySelector(".hours");
let M = document.querySelector(".minutes");
let S = document.querySelector(".seconds");
let start = document.querySelector("#start");
let id;

function startCounter() {
  start.setAttribute("disabled", true);
  id = setInterval(function () {
    updateSeconds(Number(S.innerText));
  }, 1000);
}

function updateSeconds(sec) {
  sec++;
  if (sec >= 0 && sec < 10) {
    S.innerText = "0" + sec;
  } else if (sec >= 10 && sec < 60) {
    S.innerText = sec;
  } else {
    S.innerText = "00";
    updateMinutes(Number(M.innerText));
  }
}

function updateMinutes(min) {
  min++;
  if (min >= 0 && min < 10) {
    M.innerText = "0" + min;
  } else if (min >= 10 && min < 60) {
    M.innerText = min;
  } else {
    M.innerText = "00";
    updateHours(Number(H.innerText));
  }
}

function updateHours(hour) {
  hour++;
  if (hour >= 0 && hour < 10) {
    H.innerText = "0" + hour;
  } else if (hour >= 10 && hour <= 24) {
    H.innerText = hour;
  } else {
    H.innerText = "00";
  }
}

function Reset() {
  H.innerText = "00";
  M.innerText = "00";
  S.innerText = "00";
  clearInterval(id);
  start.removeAttribute("disabled");
}

function Stop() {
  clearInterval(id);
}