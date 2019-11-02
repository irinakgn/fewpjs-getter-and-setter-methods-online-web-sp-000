// Add your Circle class here

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  get diameter() {
    return 2 * this.radius;
  }

  get circumference() {
    return 2 * Math.PI * this.radius;
  }
   set circumference(newCircumference){
     this.radius = 2 * Math.PI;
   }

  get area() {
    return Math.PI * this.radius * this.radius;
  }

  set area(newArea) {
    this.radius = Math.sqrt(newArea) * Math.PI;
  }
}
