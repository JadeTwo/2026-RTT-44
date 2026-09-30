import Product from "./products.ts";

// a new DigitalProduct class that extends Product (has all the same properties and methods as Product)
class DigitalProduct extends Product {

    // unique property to the DigitalProduct 
    fileSize: number;

    constructor(name: string, price: number, fileSize: number) {
        
        // passing the name and price values to the parent contructor
        super(name, price); // super refers to the parent class (Product)
     
        // assign the value of the fileSize property
        this.fileSize = fileSize;
    }

    // this version of displayDetails is overriding the parent method (method overriding)
    displayDetails(): string {
        return `${this.name} costs $${this.price} and is a digital download of ${this.fileSize}MB.`;
    }
}

const ebook = new DigitalProduct("E-Book", 15, 5);

console.log(ebook.displayDetails());