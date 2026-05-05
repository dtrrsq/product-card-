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

const curso = new Robot("Curso", 100);
const optimusPrime = new Robot("OptimusPrime", 100);

optimusPrime.showInfo();
optimusPrime.takeDamage(70);
console.log(optimusPrime.isAlive());
