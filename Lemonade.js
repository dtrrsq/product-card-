import Drink from "./Drink.js";

class Lemonade extends Drink {
  constructor(name, size, price, temp, flavor) {
    super(name, size, price, temp);
    this.flavor = flavor;
  }
  changeFlavor(newFlavor) {
    this.flavor = newFlavor;
    console.log(`вкус лимонада был  заменен на ${this.flavor}`);
  }
}
export default Lemonade;
