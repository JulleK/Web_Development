class Car {
    constructor(brand) {
        this.brand = brand;
        this.speed = 0;
        this.motion = "The car is not moving"
    }
    accelerate(amount) {
        this.speed += amount;
        this.checkMotion()
    }
    brake(amount) {
        (amount > this.speed) ? this.speed = 0 : this.speed -= amount;
        this.checkMotion()
    }
    status() {
        return `${this.brand} running at ${this.speed}km/h`;
    }
    checkMotion() {
        (this.speed > 0) ? this.motion = "The car is moving" : this.motion = "The car is not moving"
    }
    emergencyBrake() {
        this.speed = 0;
        this.checkMotion()
    }
}

const ford = new Car("Ford");
ford.accelerate(251)
console.log(ford.status())

const bmw = new Car("bmw")
bmw.brake(10000)
console.log(bmw.status())