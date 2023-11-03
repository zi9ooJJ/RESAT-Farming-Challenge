const userData = [
  { userID: 'user', userPW: '1q2w3e4r' },
  { userID: 'user2', userPW: '1234qwer' },
  { userID: 'user3', userPW: '12341234' },
];

const main = document.querySelector('.main-container');
const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const { userID, userPW } = e.target;

  const findUser = userData.find((user) => {
    return user.userID === userID.value && user.userPW === userPW.value;
  });

  if (userID.value === '' || userPW.value === '')
    return showToastHandler('아이디와 비밀번호를 입력해주세요.');
  if (findUser) return showToastHandler('로그인에 성공하였습니다!');
  if (!findUser) return showToastHandler('회원정보가 일치하지 않습니다.');
});

const showToastHandler = (msg) => {
  const toastBox = document.createElement('div');
  toastBox.classList.add('toast-box');

  toastBox.innerText = msg;
  main.appendChild(toastBox);

  setTimeout(() => {
    main.removeChild(toastBox);
  }, 2000);
};
