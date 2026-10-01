// The capital T is a placeholder (kinda like a parameter)
function identity<T>(arg: T): T {
    return arg;
}

// The argument for the type T is "string"
console.log(identity<string>("Hello"));

// The argument for the type T is a "number"
console.log(identity<number>(42));

interface Car {
    start(): void;
}

const car = {
    start() {
        console.log('vroom');
    }
}

// The argument for the type T is a "Car"
identity<Car>(car);


function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

console.log(getFirstElement<number>([1, 2, 3, 4])); // Outputs 1
console.log(getFirstElement<string>(["a", "b", "c"])); // Outputs "a"
console.log(getFirstElement<Car>([car])); // Output is the car (object)


// GENERICS + INTERFACES

interface DataContainer<T> {
    data: T;
    getData: () => T;
}

// Instead of doing all this: 

// interface DataContainerNumber {
//     data: number;
//     getData: () => number;
// }

// interface DataContainerString {
//     data: string;
//     getData: () => string;
// }


// numberContainer is of type DataContainer (that uses the type number)
const numberContainer: DataContainer<number> = {
    data: 123,
    getData: function () {
        return this.data;
    }
};

// stringContainer is of type DataContainer (that uses the type string)
const stringContainer: DataContainer<string> = {
    data: "TypeScript",
    getData: function () {
        return this.data;
    }
};

console.log(numberContainer.getData()); // Outputs 123
console.log(stringContainer.getData()); // Outputs "TypeScript"


// GENERICS + CLASS

class Box<T> {

    content: T; // The T represents a specific type that has not been defined yet (a placeholder)

    constructor(content: T) {
        this.content = content;
    }

    getContent(): T {
        return this.content;
    }
}

// we determine the type T when we create the object (instance) 
const stringBox = new Box<string>("Hello, TypeScript!");
const numberBox = new Box<number>(10);
const carBox = new Box<Car>(car);

console.log(stringBox.getContent()); // Outputs "Hello, TypeScript!"
console.log(numberBox.getContent()); // Outputs 100
console.log(carBox.getContent()); // Outputs the car object