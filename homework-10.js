import { Robot } from "./Robot.JS";
import { WarRobot } from "./WarRobot.JS";

const optimusPrime = new Robot("OptimusPrime", 100);
const megaTron = new WarRobot("Megatron", 100, 777);

optimusPrime.showInfo();
optimusPrime.takeDamage(70);
console.log(optimusPrime.isAlive());

megaTron.hasPower();
