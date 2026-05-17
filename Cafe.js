class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  showInfo() {
    console.log(`${this.name} расположен на улице ${this.location}`);
  }
  orderDrink(drinkObj) {
    console.log(`Вы заказали ${drinkObj.name}`);
    drinkObj.bringDrink();
  }
}
export default Cafe;
