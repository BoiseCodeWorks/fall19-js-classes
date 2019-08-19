import Car from "./Car.js";
import Puppy from "./Puppy.js";

let value = 0

class App {
  constructor() {
    console.log("hello from app")
    this.car = new Car({ make: "chevy", model: "tracker", color: "Olive Drab", sound: "Bang Bang putt putt" })
    this.car2 = new Car({ make: "ford", model: "taurus", color: "red", sound: "Chitty chitty VROOOOOM!!111" })
    this.puppy = new Puppy(true)
  }

  logValue() {
    console.log(value)
  }
}



window["app"] = new App()