let fruit = {
    name: "Apple",
    type: "Honeycrisp",
    price: 1
}

let car = {
    brand: "Toyota",
    wheels: 4,
    drive: function() {     // method
        console.log('Vroom!');
    },
    break: function() {
        console.log('Screeech!');
    }
}

// dot notation
console.log(car.brand)

// call the drive method
console.log(car.drive())

// square bracket notation (another way to access the value of a property)
console.log(car['wheels']);


let person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  greet: function () {
    console.log("Hello, my name is " + this.firstName + " " + this.lastName);
  },
  favoriteThings: ["Pie", "Cats"],
  pet: {
    name: "Bob"
  }
};

// what are this person's favorite things?
console.log(person.favoriteThings[1]);

console.log(person.firstName);

// how do we call the greet method?
person.greet();

// reassign a value of a property
person.firstName = "Bob";

// add a property
person.hair = "red";

// delete a property
delete person.lastName

console.log(person)

console.log(person.firstName);