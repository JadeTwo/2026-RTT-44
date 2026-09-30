// import our products
import { product1, product2 as p2, Product } from './products.ts';

// import everything from products.ts that was exported in an object
// import * as ProductObject from './products.ts';

// change the inStock property
product1.inStock = false;

// call the displayDetails method
console.log(product1.displayDetails());
console.log(p2.displayDetails());

const product3 = new Product("Richard", 999);
console.log(product3.displayDetails());



