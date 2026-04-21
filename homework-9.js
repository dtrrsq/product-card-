// 1. добавить логику:email должен соответствовать стандартам
const footer_form = document.querySelector(".footer_form");
footer_form.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
});

// 2. Создать кнопку "Регистрация". Создать модальное окно, используя классы "modal, modal-showed
const openButton = document.querySelector(".open-modal-btn");
const overlay = document.querySelector(".overlay");
const closeButton = document.querySelector(".close-modal-btn");

openButton.addEventListener("click", () => {
  overlay.classList.add("modal-showed");
});

closeButton.addEventListener("click", () => {
  overlay.classList.remove("modal-showed");
});

// 3. оздать форму для регистрации внутри модального окна. Она должна содержать поля: имя, фамилия, дата рождения, логин, пароль,
let user;
const registrationForm = document.querySelector("#registration-form");
registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!registrationForm.checkValidity()) {
    alert("Форма заполнена неверно!");
    return;
  }
  const passwordInput = registrationForm.querySelector(
    'input[name="Password"]',
  );
  const confirmPasswordInput = registrationForm.querySelector(
    'input[name="ConfirmPassword"]',
  );

  if (passwordInput.value !== confirmPasswordInput.value) {
    alert("Пароли не совпадают!");
    return;
  }
  const targetForm = event.target;
  const formData = new FormData(targetForm);
  const newUser = Object.fromEntries(formData.entries());

  newUser.createdOn = new Date();
  user = newUser;
  console.log(user);
  overlay.classList.remove("modal-showed");
});
