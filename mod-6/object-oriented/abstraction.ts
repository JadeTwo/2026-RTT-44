
// ABSTRACT CLASSES

abstract class Shape {
    // abstract method here does not have logic, but it will need it when the class is extended
    abstract getArea(): number; // Abstract method with no implementation

    displayArea(): string {
        return `The area is ${this.getArea()} square units.`;
    }
}

class Square extends Shape {
    // square must have a getArea method and implement it
    getArea(): number {
        return 0;
    }
    displayArea(): string {
        return 'area of a square';
    }
}

class Triangle extends Shape {
    // triangle must have a getArea method and implement it
    getArea(): number {
        return 1;
    }
}

class Circle extends Shape {
    radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    // we implement the getArea method (which was abstract)
    getArea(): number {
        return Math.PI + this.radius + this.radius;
    }
}

const circle = new Circle(5);
console.log(circle.displayArea());


// INTERFACES

interface Vehicle {
    speed: number;
    start(): void;
}

interface Toyota {}

class Car implements Vehicle, Toyota {

    speed: number;

    constructor(speed: number) {
        this.speed = speed;
    }

    start() {
        console.log('vroom');
    }

}

class Bike implements Vehicle {

    // needs a speed property (because it implements the Vehicle interface)
    speed: number;

    constructor(speed: number) {
        this.speed = speed;
    }

    // needs a start method (because it implements the Vehicle interface)
    start(): void {
        console.log("Bike starts at speed " + this.speed);
    }
}

const myBike = new Bike(25);
myBike.start();
