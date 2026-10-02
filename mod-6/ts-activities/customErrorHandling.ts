// X Create a file called customErrorHandling.ts.
// X Write a function called processOrder that:
// X Takes an order object with properties: productId, quantity, and price.
// X Throws a ValidationError if quantity is less than 1.
// X Throws a PaymentError if price is not a positive number.
// Create two custom error classes: ValidationError and PaymentError.
// Implement a function called handleOrder that catches and logs these custom errors.
// Critical Thinking: How do custom errors help in identifying specific issues in larger codebases? What challenges might arise if you only use generic error messages?

interface Product {
    productId: string;
    quantity: number;
    price: number;
}

function processOrder(order: Product) {
    if (order.quantity < 1) {
        throw new Error("No product selected.");
    }
    if (order.price <= 0) {
        throw new Error("Payment didn't go through.");
    }
}