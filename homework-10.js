export class Robot {
  constructor(name, battery) {
    this.name = name;
    this.battery = battery;
  }
  showInfo() {
    console.log(`У ${this.name} Осталось ${this.battery}% Заряда`);
  }
  takeDamage(amount) {
    this.battery -= amount;
    console.log(
      `${this.name} получил урон: ${amount}. Осталось: ${this.battery}%`,
    );
  }
  isAlive() {
    return this.battery >= 0 ? "Еще есть заряд" : "Разрядился";
  }
}

const optimusPrime = new Robot("OptimusPrime", 100);

optimusPrime.showInfo();
optimusPrime.takeDamage(70);
console.log(optimusPrime.isAlive());

class WarRobot extends Robot {
  constructor(name, battery, combatPower) {
    super(name, battery);
    this.combatPower = combatPower;
  }
  hasPower() {
    console.log(`${this.name} получил ${this.combatPower} единиц силы`);
  }
}

const megaTron = new WarRobot("Megatron", 100, 777);

megaTron.hasPower();
