// // creates an object (blueprint)
// class Product {

//     // properties of the object that will be created
//     name: string;
//     price: number;
//     inStock: boolean;

//     // special method that is called (Product()) and used to create the object
//     constructor(name: string, price: number, inStock: boolean = true) {

//         // "this" refers to the current object
//         this.name = name;
//         this.price = price;
//         this.inStock = inStock;
//     }

//     // normal method (instance method - which is only available after we create the object)
//     displayDetails(): string {
//         return `${this.name} costs $${this.price} and is ${this.inStock ? "in stock" : "out of stock"}.`;
//     }
// }

// // create an object (instance) of the Product class 
// const product = new Product("TV", 500);

// console.log(product.name)

// // DigitalProduct (child/sub) inherit the properties of Product (parent/super)
// class DigitalProduct extends Product {

//     // unique property of the child class
//     fileSize: number;

//     // name and price here are properties in the parent (Product)
//     constructor(name: string, price: number, fileSize: number) {

//         // super refers to the parent class (in this case it calls the parent contructor)
//         super(name, price);
//         this.fileSize = fileSize;
//     }

//     // method overriding (logic of the displayDetails is changed by the child class)
//     displayDetails(): string {
//         return `${this.name} costs $${this.price} and is a digital download of ${this.fileSize}MB.`;
//     }
// }

// // initiates the creation of the object based off the class (instatiation)
// const ebook = new DigitalProduct("E-Book", 15, 5);

// // calling the displayDetails method of the child class (includes file size info)
// console.log(ebook.displayDetails());