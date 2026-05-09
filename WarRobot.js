import { Robot } from "./Robot.js";

export class WarRobot extends Robot {
  constructor(name, battery, combatPower) {
    super(name, battery);
    this.combatPower = combatPower;
  }
  hasPower() {
    console.log(`${this.name} получил ${this.combatPower} единиц силы`);
  }
}
