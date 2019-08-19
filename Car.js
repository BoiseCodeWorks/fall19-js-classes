console.log("hello from car")


export default class Car {
  constructor(data) {
    this.make = data.make || "Unknown"
    this.model = data.model || "Unknown"
    this.color = data.color || "Unknown"
    this.sound = data.sound
    this.gasTank = 100
    console.log("Car Created!")
  }

  start() {
    console.log(this.sound)
  }

  drive(miles) {
    this.gasTank -= miles
    console.log(this.gasTank)
  }


}
