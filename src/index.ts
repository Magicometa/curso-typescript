import * as SHClasses /*alias*/ from "./classes/Hero";
import powers from "./data/powers";

const Hero = 555; // Esto es una reasignación de nombre a la clase Hero.

const ironman = new SHClasses.Hero("Ironman", 1, 50);
console.log(ironman.name);
console.log(ironman.powerId);
console.log(ironman.age);

console.log(powers);
