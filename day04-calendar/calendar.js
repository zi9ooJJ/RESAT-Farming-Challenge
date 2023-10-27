let date = new Date();

const showCalendar = () => {
  const showYear = date.getFullYear();
  const showMonth = date.getMonth();

  document.querySelector('.year-month').textContent = `${showYear}년 ${
    showMonth + 1
  }월`;

  // 지난달과 이번달의 마지막 날
  const prevLast = new Date(showYear, showMonth, 0);
  const thisLast = new Date(showYear, showMonth + 1, 0);

  // 지난달 마지막 날짜와 요일
  const PLDate = prevLast.getDate();
  const PLDay = prevLast.getDay();

  // 이번달 마지막 날짜와 요일
  const TLDate = thisLast.getDate();
  const TLDay = thisLast.getDay();

  // Dates 기본 배열 세팅
  const prevDates = [];
  const thisDates = [...Array(TLDate + 1).keys()].slice(1); //이번 달 마지막 날짜에 + 1 해주어 n을 전달하고 전개구문을 통해 배열을 만든다. 0일은 없으니까 slice를 사용해서 1일부터 thisDates에 담는다.
  const nextDates = [];

  // 보여줄 지난달 날짜들 생성
  if (PLDay !== 6) {
    // 지난달 마지막 요일이 토요일(6)이 아니면
    for (let i = 0; i < PLDay + 1; i++) {
      prevDates.unshift(PLDate - i); // 마지막 날짜부터 i씩 줄어든 값을 전달
    }
  }
  // 보여줄 다음달 날짜들 생성
  // 이번달 마지막 날짜 요일 기준
  for (let i = 1; i < 7 - TLDay; i++) {
    nextDates.push(i);
  }

  // 지난달+이번달+다음달 합쳐서 각 date로 뿌리기.
  const dates = prevDates.concat(thisDates, nextDates);
  const firstDateIndex = dates.indexOf(1);
  const lastDateIndex = dates.lastIndexOf(TLDate);

  dates.forEach((date, i) => {
    const condition =
      i >= firstDateIndex && i < lastDateIndex + 1 ? 'this' : 'other';
    dates[
      i
    ] = `<div class="date" data-date="${date}"><span class="${condition}">${date}</span></div>`;
  });

  document.querySelector('.dates').innerHTML = dates.join('');

  // 오늘 날짜 표시하기
  const today = new Date();
  if (showYear === today.getFullYear() && showMonth === today.getMonth()) {
    for (let date of document.querySelectorAll('.this')) {
      if (+date.innerText === today.getDate()) {
        date.classList.add('today');
        break;
      }
    }
  }
};

showCalendar();

// 메모장 모달
const mainArea = document.querySelector('.main');

let memoData = {};

const memoModalHandler = (y, m, d) => {
  const modalWrap = document.createElement('div');
  const memoDate = document.createElement('div');
  const memoModal = document.createElement('textarea');
  const memoArea = document.createElement('div');
  //   const addButton = document.createElement('button');
  const postButton = document.createElement('button');

  modalWrap.classList.add('modal-wrap');
  memoModal.classList.add('memo-modal');
  memoModal.setAttribute('placeholder', '메모를 입력해주세요.');
  memoArea.classList.add('memo-area');
  memoDate.classList.add('memo-date');
  postButton.classList.add('post-button');
  postButton.innerText = '등록';

  memoDate.innerText = `${y}년 ${m}월 ${d}일`;

  mainArea.appendChild(modalWrap);
  modalWrap.appendChild(memoDate);
  modalWrap.appendChild(memoModal);
  modalWrap.appendChild(memoArea);
  modalWrap.appendChild(postButton);

  const dateElements = document.querySelectorAll('.date');

  postButton.addEventListener('click', () => {
    const memoContent = memoModal.value;
    const key = `${y}-${m}-${d}`;

    if (memoContent) {
      if (!memoData[key]) {
        memoData[key] = [];
      }
      memoData[key].push(memoContent);
    }
    modalWrap.style.display = 'none';

    // 날짜 엘리먼트를 찾고 data-date 속성을 비교
    dateElements.forEach((dateElement) => {
      if (dateElement.getAttribute('data-date') === d.toString()) {
        if (memoData[key] && memoData[key].length > 0) {
          dateElement.innerHTML += '<span class="memo-label">📝</span>';
        }
      }
    });
  });
};

// 날짜 클릭시 메모장 모달 띄우기
const openModal = () => {
  const dateModal = document.querySelectorAll('.date');
  for (let i = 0; i < dateModal.length; i++) {
    dateModal[i].addEventListener('click', () => {
      const clickedDate = parseInt(dateModal[i].textContent); // 클릭한 날짜 가져오기
      const clickedYear = date.getFullYear();
      const clickedMonth = date.getMonth() + 1;
      memoModalHandler(clickedYear, clickedMonth, clickedDate);
    });
  }
};

openModal();

const goPrev = document.querySelector('.go-prev');
const goNext = document.querySelector('.go-next');
const goToday = document.querySelector('.go-today');

// 지난달로 이동
const prevMonth = () => {
  date.setDate(1);
  date.setMonth(date.getMonth() - 1);
  showCalendar();
  openModal();
};

// 다음달로 이동
const nextMonth = () => {
  date.setDate(1);
  date.setMonth(date.getMonth() + 1);
  showCalendar();
  openModal();
};

// 오늘 날짜로 이동
const showToday = () => {
  date = new Date();
  showCalendar();
  openModal();
};

goPrev.addEventListener('click', prevMonth);
goNext.addEventListener('click', nextMonth);
goToday.addEventListener('click', showToday);
