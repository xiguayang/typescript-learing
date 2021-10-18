import { Circle } from "./Circle";
import { Shape } from "./Shape";
import { Rectangle } from './Rectangle';


let myCircle = new Circle(5,10,20);

console.log(myCircle.getInfo());
let myRectangle = new Rectangle(0,4,2,3);
console.log(myRectangle.getInfo())