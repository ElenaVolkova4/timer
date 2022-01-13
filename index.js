let counterTime = 0;
let timer;

//экран таймера
const timerScreen = document.querySelector(".timer");

//выбор времени
const shortBtn = document.querySelector(".short");
const longBtn = document.querySelector(".long");
const userTime = document.querySelector('input[type="time"]');
const okBtn = document.querySelector(".ok");

//кнопки выбора времени
shortBtn.addEventListener("click", () => {
  counterTime = 1200;
  displayTimer();
});

longBtn.addEventListener("click", () => {
  counterTime = 3600;
  displayTimer();
});

okBtn.addEventListener("click", () => {
  counterTime = document.querySelector(".user_time_input").valueAsNumber / 1000;
  displayTimer();
});

//кнопки таймера
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const backBtn = document.querySelector(".back");

//формат отображения
const displayTimer = () => {
  const hours = Math.floor(counterTime / 3600);
  const minutes = Math.floor((counterTime % 3600) / 60);
  const seconds = Math.floor(counterTime % 60);

  const displayHours = hours < 10 ? "0" + hours : hours;
  const displayMinutes = minutes < 10 ? "0" + minutes : minutes;
  const displaySeconds = seconds < 10 ? "0" + seconds : seconds;

  timerScreen.innerHTML =
    displayHours + ":" + displayMinutes + ":" + displaySeconds;
};

//прямой отсчет
const countUp = () => {
  counterTime++;
  displayTimer();
  if (counterTime > 0) {
    timerScreen.style.border = "4px solid #dbe7f2";
  }
};

//обратный отсчет
const countDown = () => {
  const newcounterTime = counterTime - 1;
  if (newcounterTime === 0) {
    timerScreen.style.border = "4px solid #0d773d";
    counterTime--;
    clearInterval(timer);
  } else {
    if (newcounterTime > 0) {
      counterTime--;
    }
  }
  displayTimer();
};

//нажатия на кнопки таймера
startBtn.addEventListener("click", () => {
  timer = clearInterval(timer);
  timer = setInterval(countUp, 1000);
  startBtn.disabled = true;
  backBtn.disabled = false;
});

stopBtn.addEventListener("click", () => {
  timer = clearInterval(timer);
  startBtn.disabled = false;
  backBtn.disabled = false;
});

resetBtn.addEventListener("click", () => {
  timer = clearInterval(timer);
  startBtn.disabled = false;
  backBtn.disabled = false;
  counterTime = 0;
  displayTimer();
  timerScreen.style.border = "4px solid #dbe7f2;";
});

backBtn.addEventListener("click", () => {
  timer = clearInterval(timer);
  timer = setInterval(countDown, 1000);
  startBtn.disabled = false;
  backBtn.disabled = true;
});

displayTimer(); //чтобы на таймере всегда были цифры
