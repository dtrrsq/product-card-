import "./scriipt.js";
import "./homework-5.js";
import "./homework-6.js";
import "./homework-7.js";
import "./homework-8.js";
import "./homework-9.js";
import { Form } from "./forms.js";
import { Robot } from "./homework-10.js";
import { Modal } from "./modal.js";

let user;

const regModal = new Modal("registration-modal");
const regForm = new Form("registration-form");

const openButton = document.querySelector(".open-modal-btn");

openButton.addEventListener("click", () => {
  regModal.open();
});

regForm.form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!regForm.isValid()) {
    alert("Форма заполнена неверно!");
    return;
  }

  const newUser = regForm.getValues();

  if (newUser.Password !== newUser.ConfirmPassword) {
    alert("Пароли не совпадают!");
    return;
  }

  newUser.createdOn = new Date();
  user = newUser;
  console.log("Данные успешно сохранены:", user);

  regForm.reset();
  regModal.close();

  alert("Вы успешно зарегистрированы!");
});
