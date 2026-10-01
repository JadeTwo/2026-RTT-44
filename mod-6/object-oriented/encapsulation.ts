class Product {

    // static method (available on the class itself)
    static taxRate = 0.05;

    // access modifiers
    private sku: string; // only accessible within the class
    public name: string; // accessible anywhere
    protected _price: number; // only accessible within the class or its subclasses

    constructor(sku: string, name: string, price: number) {
        this.sku = sku;
        this.name = name;
        this._price = price;
    }

    // this is now our price property (accessing product.price calls this method)
    get price(): number {
        return this._price * (Product.taxRate + 1); // accessing the static property taxRate (class-level property)
    }

    // this would set the price
    set price(newPrice: number) {
        console.log(newPrice + ' inside setter');
        this._price = newPrice;
    }

    // we can use method inside the Product class or PhysicalProduct class
    protected displayDetails(): string {
        return `${this.name} (SKU: ${this.sku}) costs $${this.price}.`;
    }
}

// using the static property to access the tax rate (without making any objects)
console.log('Tax : ' + Product.taxRate)

const product = new Product('038242', 'TV', 500)
// console.log(product.name); // we can only access the public property name
// console.log(product.displayDetails()); <-- displayDetails is a protected class 

console.log(product.price) // because there's a getter method for price, it calls the method for us
product.price = 50; // because there's a setter method for price, it calls that method for us
console.log(product.price) // the price property value has changed


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

// console.log(product2.displayDetails()); // call the displayDetails of the child class (which is not protected)
