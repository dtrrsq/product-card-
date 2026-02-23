// покраска первой карты
const recolorFirstCardButton = document.getElementById('recolor-first-card-button');
const firstProductCard = document.querySelector('.product-card');
const blackHashColor = '#000000f5';

recolorFirstCardButton.addEventListener('click', () => [
  firstProductCard.style.backgroundColor = blackHashColor,
]);

// покраска всех карт
const recolorALLCardsButton = document.querySelector('#recolor-all-cards-button');
const productCards = document.querySelectorAll('.product-card');
const blueHashColor = '#011eff';

recolorALLCardsButton.addEventListener('click', () => {
  productCards.forEach(
    card => card.style.backgroundColor = blueHashColor );
});

//переход на страницу Google
const openGoogleButton = document.querySelector('#open-google-button');
openGoogleButton.addEventListener('click', openGoogle);

function openGoogle() {
  const answer = confirm('Вы действительно хотите перейти на сайт Google');

  if (answer === true) {
    window.open('https://google.com');
  } else {
    console.log('пользователь отменил переход на Google');
  }
};

// выведение контента в консоль
const produtCardTitle = document.querySelector('.product-card-container__title');
produtCardTitle.addEventListener('mouseover', function () {
  console.log(produtCardTitle.textContent);
});

// переключатель цвета кнопки
const colorTogglerButton = document.querySelector('#color-toggler-button');
const pinkHashColor = '#ff00e1';
const yellowHashColor = '#fff700';
let step = 0;

colorTogglerButton.addEventListener('click', () => {
  step++;
  colorTogglerButton.classList.toggle('submit');
  
  if (step === 1) {
    colorTogglerButton.style.backgroundColor = pinkHashColor;
  } else {
    colorTogglerButton.style.backgroundColor = yellowHashColor;
    step = 0;
  }
});

