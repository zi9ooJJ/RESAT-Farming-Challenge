const carouselWrapper = document.querySelector('.carousel-wrapper');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

const imgURL = [
  {
    src: 'https://img.freepik.com/premium-photo/a-green-background-with-a-green-background-that-says-green_873925-17617.jpg',
    text: '기업 유튜브 채널로<br/>10만 구독자 모으기(1탄)',
  },
  {
    src: 'https://img.freepik.com/premium-photo/a-green-background-with-a-green-background-that-says-green_873925-17617.jpg',
    text: '기업 유튜브 채널로<br/>10만 구독자 모으기(2탄)',
  },
  {
    src: 'https://colorate.azurewebsites.net/SwatchColor/3F3E3D',
    text: '고객 데이터 분석으로<br/>고객 중심 서비스 제공하기',
  },
  {
    src: 'https://i.ytimg.com/vi/14VgDx5uxqs/maxresdefault.jpg',
    text: '신규 입사자의 적응을<br/>돕는 효과적인 온보딩<br/>프로그램 알아보기',
  },
];

let imgIdx = 0;

imgURL.forEach((img) => {
  const carouselSlide = document.createElement('div');
  carouselSlide.classList.add('carousel-slide');

  const carouselImg = document.createElement('img');
  carouselImg.classList.add('carousel-img');

  const carouselText = document.createElement('p');
  carouselText.classList.add('carousel-text');

  const carouselTag = document.createElement('p');
  carouselTag.classList.add('carousel-tag');

  carouselImg.src = img.src;
  carouselImg.alt = 'carousel image';

  carouselText.innerHTML = img.text;

  carouselSlide.appendChild(carouselText);
  carouselSlide.appendChild(carouselImg);
  carouselWrapper.appendChild(carouselSlide);
});

const carouselHandler = () => {
  // 인덱스 값이 이미지배열의 범위를 벗어나면 처음이나 마지막으로 이동
  if (imgIdx > imgURL.length - 1) {
    imgIdx = 0;
  }
  if (imgIdx < 0) {
    imgIdx = imgURL.length - 1;
  }

  carouselWrapper.style.transform = `translateX(-${imgIdx * 100}%)`;
};

prevBtn.addEventListener('click', () => {
  imgIdx--;
  carouselHandler();
});

nextBtn.addEventListener('click', () => {
  imgIdx++;
  carouselHandler();
});

setInterval(() => {
  imgIdx++;
  carouselHandler();
}, 2000);
