import { Robot } from "./Robot.js";
import { WarRobot } from "./WarRobot.js";

const optimusPrime = new Robot("OptimusPrime", 100);
const megaTron = new WarRobot("Megatron", 100, 777);

optimusPrime.showInfo();
optimusPrime.takeDamage(70);
console.log(optimusPrime.isAlive());

megaTron.hasPower();
