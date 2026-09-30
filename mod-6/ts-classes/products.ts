// blueprint for creating objects (cookie cutter is used to create cookies)
class Product {

    // the properties of the object (not yet created)
    name: string;
    price: number;
    inStock: boolean;

    // built-in method of our class that helps us create the object
    constructor(name: string, price: number, inStock: boolean = true) {

        // assigning values to our properties
        this.name = name; // the "this" keyword refers to the current object being created
        this.price = price;
        this.inStock = inStock;
    }

    // any object we create from this class will include this method (displayDetails)
    displayDetails(): string {
        return `${this.name} costs $${this.price} and is ${this.inStock ? "in stock" : "out of stock"}.`;
    }

}

// create the object using the class (Product) (aka creating an instance of the Product class)
const product1 = new Product("Laptop", 1200); // instantiation
const product2 = new Product("TV", 500, false);

console.log('end of products.ts')

// wrap all of our exports in an object and export the object
export { product1, product2 };

// we can use "export default" only once
export default Product;





