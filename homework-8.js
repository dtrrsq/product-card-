import { productCards } from "./product-cards.js";

const productCardTemplate = document.getElementById("product-card-template");
const productsList = document.getElementById("products-list");

const images = [
  "/images/moisturizing-mousse.png",
  "/images/moisturizing-mask.png",
  "/images/cleansing-gel.png",
  "/images/gift-set-one.png",
  "/images/gift-set-five.png",
];

function getCountFromUser() {
  const answer = prompt("Сколько карточек отобразить? От 1 до 5");
  const num = Number(answer);

  if (isNaN(num) || num < 1 || num > 5) {
    console.log("Ошибка");
    return 5;
  } else {
    console.log("ок");
    return num;
  }
}

function renderProducts(list) {
  productsList.innerHTML = "";
  list.forEach((product, index) => {
    const productClone = productCardTemplate.content.cloneNode(true);
    const imgElement = productClone.querySelector(".product-card__image");

    imgElement.src = images[index];
    imgElement.alt = product.title;

    productClone.querySelector(".product-card__for-skin").textContent =
      product.forSkin;
    productClone.querySelector(".product-card__title").textContent =
      product.title;
    productClone.querySelector(".product-card__descr").textContent =
      product.description;
    productClone.querySelector(".product-card__price").textContent =
      product.price;

    const ingredientsList = productClone.querySelector("ul");
    const ingredientItem = ingredientsList.querySelector(".product-card__item");

    product.compound.forEach((ingredientText) => {
      const newLi = ingredientItem.cloneNode(true);
      newLi.textContent = ingredientText;
      ingredientsList.appendChild(newLi);
    });
    ingredientItem.remove();
    productsList.appendChild(productClone);
  });
}
const finalCount = getCountFromUser();
const productsToDisplay = productCards.slice(0, finalCount);
renderProducts(productsToDisplay);

// Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание
const productsDescriptions = productCards.reduce((acc, product) => {
  acc[product.title] = product.description;
  return acc;
}, {});
console.log(productsDescriptions);
