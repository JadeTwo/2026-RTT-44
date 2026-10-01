class Product {

    // access modifiers
    private sku: string; // only accessible within the class
    public name: string; // accessible anywhere
    protected price: number; // only accessible within the class or its subclasses

    constructor(sku: string, name: string, price: number) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }

    // we can use method inside the Product class or PhysicalProduct class
    protected displayDetails(): string {
        return `${this.name} (SKU: ${this.sku}) costs $${this.price}.`; 
    }
}

const product = new Product('038242', 'TV', 500)
console.log(product.name); // we can only access the public property name
// console.log(product.displayDetails()); <-- displayDetails is a protected class 


class PhysicalProduct extends Product {

    // unique property to the child class
    weight: number;

    constructor(sku: string, name: string, price: number, weight: number) {
        super(sku, name, price);
        this.weight = weight;
    }

    displayDetails(): string {
        // here we use the displayDetails of the parent class
        return super.displayDetails() + ` It weighs ${this.weight} kg.`;
    }
}

const product2 = new PhysicalProduct('490205', 'Laptop', 1000, 5);

console.log(product2.displayDetails()); // call the displayDetails of the child class (which is not protected)
