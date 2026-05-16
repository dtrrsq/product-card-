class Drink {
  #temperature;
  constructor(name, size, price, temperature) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }
  showInfo() {
    console.log(
      `Напиток: ${this.name}, Цена: ${this.price} Размер: ${this.size} `,
    );
  }
  showTemp() {
    console.log(`${this.name} имеет ${this.#temperature} градусов `);
  }
  setTemperature(newTemp) {
    if (newTemp > 0 && newTemp <= 100) {
      this.#temperature = newTemp;
      console.log(`Температура изменена на ${newTemp}`);
    } else {
      console.log("Ошибка: Неверная температура напитка!");
    }
  }
  #makeDrink() {
    console.log(`ваш ${this.name} готов`);
  }
  bringDrink() {
    this.#makeDrink();
  }
}

export default Drink;
