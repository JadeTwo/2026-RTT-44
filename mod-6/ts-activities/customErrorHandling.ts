// X Create a file called customErrorHandling.ts.
// X Write a function called processOrder that:
// X Takes an order object with properties: productId, quantity, and price.
// X Throws a ValidationError if quantity is less than 1.
// X Throws a PaymentError if price is not a positive number.
// X Create two custom error classes: ValidationError and PaymentError.
// X Implement a function called handleOrder that catches and logs these custom errors.
// Critical Thinking: How do custom errors help in identifying specific issues in larger codebases? What challenges might arise if you only use generic error messages?

interface Product {
    productId: string;
    quantity: number;
    price: number;
}

const product: Product = {
    productId: "ChocolateChipCookies-227",
    quantity: 0,
    price: 2.27
}

class ValidationError extends Error {
    constructor(message: string) {
        super(message);
    }
}

class PaymentError extends Error {
    constructor(message: string) {
        super(message);
    }
}


function processOrder(order: Product) {
    if (order.quantity < 1) {
        throw new ValidationError("Out of stock.");
    }
    if (order.price <= 0) {
        throw new PaymentError("Payment declined.");
    }
}

function handleOrder() {
    try {
        processOrder(product);
        console.log('Success.')
    } catch (error) {
        if (error instanceof ValidationError) {
            console.error(error.message);
        } else if (error instanceof PaymentError) {
            console.error(error.message);
        } else {
            console.error('Uknown error.')
        }
    } finally {
        console.log(product);
    }
}

handleOrder();


