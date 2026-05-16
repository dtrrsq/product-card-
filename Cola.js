import Drink from "./Drink.js";

class Cola extends Drink {
  constructor(name, size, price, temp, sugar) {
    super(name, size, price, temp);
    this.sugar = sugar;
  }
  checkSugar() {
    return this.sugar > 0
      ? "В этой Коле есть сахар"
      : "Это диетическая Кола без сахара";
  }
  addSugar(grams) {
    this.sugar += grams;
    console.log(
      `В ${this.name} добавлено ${grams}г сахара. Теперь всего: ${this.sugar}г`,
    );
  }
}
export default Cola;
