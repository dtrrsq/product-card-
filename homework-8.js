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
    alert("Ошибка!");
    return getCountFromUser();
  }
  return num;
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
    ingredientsList.innerHTML = "";

    product.compound.forEach((ingredientText) => {
      const newLi = document.createElement("li");
      newLi.textContent = ingredientText;
      newLi.classList.add("product-card__item");
      ingredientsList.appendChild(newLi);
    });
    productsList.appendChild(productClone);
  });
}
const finalCount = getCountFromUser();
const productsToDisplay = productCards.slice(0, finalCount);
renderProducts(productsToDisplay);

// Используя метод .reduce(), получить массив объектов, где ключем является название продукта, а значением - его описание
const productsDescriptions = productCards.reduce((acc, product) => {
  acc.push({
    title: product.title,
    description: product.description,
  });
  return acc;
}, []);
console.log(productsDescriptions);
