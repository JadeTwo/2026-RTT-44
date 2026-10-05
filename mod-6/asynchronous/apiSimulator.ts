// X Create a file called apiSimulator.ts.
// X Implement three functions that simulate API requests using Promises:
// X getProductDetails should simulate fetching product details (e.g., name, price).
// X getProductReviews should simulate fetching reviews for a product.
// X getRelatedProducts should simulate fetching related products.
// Chain these Promises together to display product details, reviews, and related products in the console.
// Critical Thinking: How does chaining Promises help keep the code organized? What challenges might you face when dealing with complex chains of Promises?

interface Product {
    name: string;
    price: number;
}

function getProductDetails(): Promise<Product> {
    // create a promise to simulate a request for product detauls
    return new Promise((resolve) => {
        // use a setTimeout to simulate the waiting period
        setTimeout(() => {
            // we want to send back the data (resolve the promise)
            let product: Product = { name: 'Headphones', price: 199 };
            resolve(product);
        }, 2000)
    });
}

interface Review {
    rating: number;
}

function getProductReviews(): Promise<Review[]> {
    // create a promise to simulate a request for reviews
    return new Promise((resolve) => {
        // use a setTimeout to simulate the waiting period
        setTimeout(() => {
            // we want to send back the data (resolve the promise)
            let reviews: Review[] = [{ rating: 5 }, { rating: 4 }, { rating: 1 }];
            resolve(reviews);
        }, 250)
    });
}

function getRelatedProducts(): Promise<Product[]> { 
    // create a promise to simulate a request for reviews
    return new Promise((resolve) => {
        // use a setTimeout to simulate the waiting period
        setTimeout(() => {
            // we want to send back the data (resolve the promise)
            let relatedProducts: Product[] = [{ name: 'AirPods', price: 99 }, { name: 'Mouthpiece', price: 59 }];
            resolve(relatedProducts);
        }, 250)
    });
}


// handle the first promise (coming from getProductDetails)
getProductDetails() 
    // what happens when the promise state goes from pending to fulfilled (resolved)
    .then((product) => { // the paramater "product" is the value that was promised (passed through resolve)
        // we'll return the next promise
        console.log(product)
        return getProductReviews() // creates a new promise that is returned back to us
    })
    .then((reviews) => {
        console.log(reviews)
        return getRelatedProducts();
    })
    .then((relatedProducts) => {
        console.log(relatedProducts);
    })


// it could be seperate like this...

// getProductDetails()
//     .then()
//     .catch()

// getProductReviews()
//     .then()
//     .catch()

// getRelatedProducts()
//     .then()
//     .catch()

// or you could use one of the "Composition Tools"

// Promise.all([getProductDetails(), getProductReviews(), getRelatedProducts()])
//     .then()
