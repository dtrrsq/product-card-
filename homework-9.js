import { Form } from "./forms.js";

const footerSubscription = new Form("footer-subscription");

footerSubscription.form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!footerSubscription.isValid()) {
    alert("Введите корректный email!");
    return;
  }

  const data = footerSubscription.getValues();

  console.log("Данные подписки собраны через класс Form:", data);

  footerSubscription.reset();
  alert("Спасибо за подписку!");
});
