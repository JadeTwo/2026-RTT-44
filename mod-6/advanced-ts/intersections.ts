interface HasName {
    name: string;
}

interface HasPrice {
    price: number;
}

// create a Type Alias here using an intersection                      
type ProductWithDetails = HasName & HasPrice; // how we combine two types into one

// this object needs to match the HasName and HasPrice interface (it needs a name property and a price property)
const product: ProductWithDetails = {
    name: "Laptop",
    price: 999.99
};

console.log(`${product.name} costs $${product.price}`);
