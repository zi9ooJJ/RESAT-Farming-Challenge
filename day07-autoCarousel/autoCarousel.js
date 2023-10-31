const carouselWrapper = document.querySelector('.carousel-wrapper');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

const imgURL = [
  'https://www.ghibli.jp/gallery/chihiro014.jpg',
  'https://www.ghibli.jp/gallery/chihiro003.jpg',
  'https://www.ghibli.jp/gallery/chihiro043.jpg',
  'https://www.ghibli.jp/gallery/howl050.jpg',
  'https://www.ghibli.jp/gallery/howl044.jpg',
  'https://www.ghibli.jp/gallery/howl012.jpg',
  'https://www.ghibli.jp/gallery/kazetachinu024.jpg',
  'https://www.ghibli.jp/gallery/kazetachinu050.jpg',
];

let imgIdx = 0;

imgURL.forEach((img) => {
  const carouselSlide = document.createElement('div');
  carouselSlide.classList.add('carousel-slide');

  const carouselImg = document.createElement('img');
  carouselImg.classList.add('carousel-img');

  carouselImg.src = img;
  carouselImg.alt = 'carousel image';

  carouselSlide.appendChild(carouselImg);
  carouselWrapper.appendChild(carouselSlide);
});

const carouselHandler = () => {
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
