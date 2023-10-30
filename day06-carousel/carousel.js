const carouseImg = document.querySelector('.carousel');
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

document.addEventListener(
  'DOMContentLoaded',
  () => (carouseImg.src = imgURL[imgIdx])
);

prevBtn.addEventListener('click', () => {
  // 이미지가 제일 처음일 경우
  if (imgIdx === 0) {
    carouseImg.src = imgURL[imgURL.length - 1];
    imgIdx = imgURL.length - 1;
  } else {
    carouseImg.src = imgURL[(imgIdx -= 1)];
  }
});

nextBtn.addEventListener('click', () => {
  // 이미지가 제일 끝일 경우
  if (imgIdx === imgURL.length - 1) {
    carouseImg.src = imgURL[0];
    imgIdx = 0;
  } else {
    carouseImg.src = imgURL[(imgIdx += 1)];
  }
});
