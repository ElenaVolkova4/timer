let counterTime = 0;
let timer;

const timerScreen = document.querySelector(".timer");
// const timerScreen = document.querySelector('input[type="time"]');

//выбор времени
const shortBtn = document.querySelector(".short");
const longBtn = document.querySelector(".long");
const userTime = document.querySelector('input[type="time"]');
const okBtn = document.querySelector(".ok");

shortBtn.addEventListener("click", () => {
  counterTime = 1200;
  displayTimer();
});

longBtn.addEventListener("click", () => {
  counterTime = 3600;
  displayTimer();
});

okBtn.addEventListener("click", () => {
  // надо приравнять value введенное к числу
  // counterTime = 3600;
  displayTimer();
});

// document.querySelector(".timer").value;

// const timeControl = document.querySelector('input[type="time"]');
// const customInput = document.querySelector(".timer2");
// customInput.valueAsDate;

//кнопки
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
const backBtn = document.querySelector(".back");

// формат отображения
const displayTimer = () => {
  const hours = Math.floor(counterTime / 3600);
  const minutes = Math.floor((counterTime % 3600) / 60);
  const seconds = Math.floor(counterTime % 60);

  const displayHours = hours < 10 ? "0" + hours : hours;
  const displayMinutes = minutes < 10 ? "0" + minutes : minutes;
  const displaySeconds = seconds < 10 ? "0" + seconds : seconds;

  timerScreen.innerHTML =
    displayHours + ":" + displayMinutes + ":" + displaySeconds;
  // timerScreen.value =
  //   displayHours + ":" + displayMinutes + ":" + displaySeconds;
};

// console.log(document.getElementsByName("timer2"));
// console.log(document.getElementById("1").value);

// document.document.getElementsByName(".timer2").valueAsDate;
// document.getElementsByName("timer2");

//прямой отсчет
const countUp = () => {
  counterTime++;
  displayTimer();
  if (counterTime > 0) {
    timerScreen.style.border = "1px solid black";
  }
  // console.log(counterTime);
};

// обратный отсчет
const countDown = () => {
  // console.log(counterTime);
  const newcounterTime = counterTime - 1;
  if (newcounterTime === 0) {
    timerScreen.style.border = "1px solid red";
    counterTime--;
    clearInterval(timer);
  } else {
    if (newcounterTime > 0) {
      counterTime--;
    }
  }

  displayTimer();
};

//нажатия на кнопки
startBtn.addEventListener("click", () => {
  timer = clearInterval(timer);
  timer = setInterval(countUp, 1000);
  startBtn.disabled = true;
});

stopBtn.addEventListener("click", () => {
  timer = clearInterval(timer);
  startBtn.disabled = false;
});

resetBtn.addEventListener("click", () => {
  timer = clearInterval(timer);
  startBtn.disabled = false;
  counterTime = 0;
  displayTimer();
  timerScreen.style.border = "1px solid black";

  // console.log(counterTime);
});

backBtn.addEventListener("click", () => {
  // console.log(counterTime);
  timer = clearInterval(timer);
  timer = setInterval(countDown, 1000);
  startBtn.disabled = false;
});

displayTimer(); //чтобы на таймере всегда были цифры
