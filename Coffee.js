import Drink from "./Drink.js";

class Coffee extends Drink {
  constructor(name, size, price, temp, milk) {
    super(name, size, price, temp);
    this.milk = milk;
  }
  checkMilk() {
    console.log(`у вас ${this.milk} молоко `);
  }
}
export default Coffee;
