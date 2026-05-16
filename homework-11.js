import Drink from "./Drink.js";
import Coffee from "./Coffee.js";
import Cola from "./Cola.js";
import Lemonade from "./Lemonade.js";
import Cafe from "./Cafe.js";

const cola = new Cola("Кола", "big", 500, 10, 150);
const mojito = new Lemonade("Мохито", "small", 250, 5, "strawberry");
const cappuccino = new Coffee("Капучино", "Medium", 350, 50, "Безлактозное");
const myCafe = new Cafe("Safar", "Таежная");

cola.addSugar(50);
cappuccino.showInfo();
myCafe.orderDrink(cappuccino);
myCafe.showInfo();
