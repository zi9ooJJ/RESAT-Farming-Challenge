// 표시할 타이머
const timer = document.querySelector('.timer');

// 타이머 제어 버튼
const start = document.querySelector('.start');
const stop = document.querySelector('.stop');
const reset = document.querySelector('.reset');

// 타이머 동작 로직
let time = 3600;
let clear; // setInterval 함수로 생성된 인터벌 ID를 저장하는 변수, clearInterval에 전달.

const startButtonHandler = () => {
  countdownStart();
  clear = setInterval(countdownStart, 1000);
};

const stopButtonHandler = () => {
  clearInterval(clear);
};

const resetButtonHandler = () => {
  timer.innerHTML = '01 : 00 : 00';
  time = 3600;
};

const countdownStart = () => {
  if (time >= 0) {
    const hours = Math.floor(time / 3600);
    const checkMinutes = Math.floor(time / 60);
    const minutes = checkMinutes % 60;
    const seconds = time % 60;

    timer.innerHTML = `${hours < 10 ? `0${hours}` : hours} : ${
      minutes < 10 ? `0${minutes}` : minutes
    } : ${seconds < 10 ? `0${seconds}` : seconds}`;
    time--;
  } else {
    clearInterval(clear);
  }
};

// 버튼에 이벤트 추가
start.addEventListener('click', startButtonHandler);
stop.addEventListener('click', stopButtonHandler);
reset.addEventListener('click', resetButtonHandler);
