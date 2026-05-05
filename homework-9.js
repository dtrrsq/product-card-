// 1. добавить логику:email должен соответствовать стандартам
const footer_form = document.querySelector(".footer_form");
footer_form.addEventListener("submit", (event) => {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  console.log(data);
});
