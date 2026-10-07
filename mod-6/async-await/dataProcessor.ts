// X Create a file called dataProcessor.ts.
// Implement two functions using Promises:
// X fetchCustomerData that resolves with customer data after a short delay.
// X fetchOrderHistory that takes customer data and resolves with order history.
// X Refactor these functions to use async/await.
// X Use try...catch blocks to handle any errors that might occur.
// Critical Thinking: How does async/await improve readability and structure over traditional Promises? What might be the drawbacks of using async/await over Promises in certain situations?

interface Customer {
    name: string;
    email: string;
    age: number;
    customerId: number;
}

async function fetchCustomerData(): Promise<Customer> {
    return new Promise((resolve) => {
        setTimeout(() => {
            let customer: Customer = { name: "Anabela", email: 'a@gmail.com', age: 20, customerId: 3 };
            resolve(customer);
        }, 1000);
    });
}

interface Order {
    customerId: number;
    productId: number;
    dateOfSale: string;
    price: number;
    productName: string;
}

async function fetchOrderHistory(customer: Customer): Promise<Order[]> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {

            let orderHistory: Order[] = [
                { customerId: 1, productId: 1, dateOfSale: '10-07-2016', price: 100, productName: 'TV' },
                { customerId: 2, productId: 2, dateOfSale: '10-05-2016', price: 200, productName: 'Laptop' },
                { customerId: 1, productId: 3, dateOfSale: '10-01-2016', price: 50, productName: 'Headphones' }
            ];

            let filter: Order[] = [];

            for (let i = 0; i < orderHistory.length; i++) {
                
                let order: Order = orderHistory[i];
            
                // check if customer id matches the first order customerId
                if (customer.customerId === order.customerId) {
                    filter.push(order);
                } 
            }

            // check if no orders match the id
            if (filter.length === 0) {
                reject('No Orders Match Id');
            } else {
                resolve(filter);
            }

        }, 500);
    });
}

// two ways to handle promises: using then and catch methods or we could use async await
async function processData() {
    try {

        // wait for customer data and store the resolved value in a variable
        const customer = await fetchCustomerData();

        // pass the customer data to get that customer's order history
        const orderHistory = await fetchOrderHistory(customer);

        console.log(`Order History for Customer ${customer.customerId}: `, orderHistory);

    } catch (error) {

        console.log(error);
    }
}

// call the processData
processData();