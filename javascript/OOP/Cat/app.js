class Pet {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    eat() {
        return `${this.name} is eating!`
    }
}

class Cat extends Pet {
    constructor(name, age, livesLeft = 9) {
        super(name, age)
        this.livesLeft = livesLeft
    }
    meow() {
        return 'meoww'
    }
}

class Dog extends Pet {
    bark() {
        return 'woof'
    }
    eat() {
        return `${this.name} scarfs his food!`
    }
}

const monty = new Cat('monty', 9)
const wyatt = new Dog('wyatt', 13)