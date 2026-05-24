const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function init() {
  const localData = localStorage.getItem("users");
  if (localData === null) {
    document.getElementById("status-message").textContent =
      "Данные загружаются";
    await delay(2000);
    const response = await fetch("async.json");
    const data = await response.json();
    localStorage.setItem("users", JSON.stringify(data.users));
    document.getElementById("status-message").textContent = "";
    renderCards(data.users);
  } else {
    console.log("Данные уже есть в памяти");
    const users = JSON.parse(localData);
    renderCards(users);
  }
}

function renderCards(users) {
  const container = document.getElementById("users-container");
  container.innerHTML = "";
  const template = document.getElementById("user-card-template");
  if (users.length === 0) {
    document.querySelector("#status-message").textContent =
      "Список пользователей пуст";
    return;
  } else {
    document.querySelector("#status-message").textContent = "";
  }

  users.forEach((user) => {
    const clone = template.content.cloneNode(true);
    clone.querySelector(".user-name").textContent =
      `${user.name} ${user.surname}`;
    clone.querySelector(".user-age span").textContent = user.age;
    clone.querySelector(".user-email span").textContent = user.email;

    const cardDeleteBtn = clone.querySelector(".delete-card-btn");
    cardDeleteBtn.addEventListener("click", () => {
      const currentData = localStorage.getItem("users");
      const currentUsers = JSON.parse(currentData);
      const filteredUsers = currentUsers.filter((item) => item.id !== user.id);
      localStorage.setItem("users", JSON.stringify(filteredUsers));
      renderCards(filteredUsers);
    });

    container.append(clone);
  });
}

const deleteBtn = document.querySelector("#delete-all-btn");
deleteBtn.addEventListener("click", () => {
  localStorage.clear();
  renderCards([]);
});

const getBtn = document.querySelector("#get-all-btn");
getBtn.addEventListener("click", () => {
  init();
});
