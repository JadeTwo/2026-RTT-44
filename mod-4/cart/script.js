// create an array to hold our grocery items (data)
let cart = [];

// select all important elements for user interaction
let itemInput = document.getElementById("itemInput");
let addItemButton = document.getElementById("addItemButton");
let removeItemButton = document.getElementById("removeItemButton");
let cartList = document.getElementById("cart");

// enable the first user interaction with an event listener
addItemButton.addEventListener("click", function () {

    // a variable to hold the value of the input (grocery item)
    let item = itemInput.value;

    // checking for an empty input (with no value)
    if (item === "") {
        alert("Please enter an item.");
        // exiting the function (stop here)
        return;
    }

    // Add item to cart array
    cart.push(item);

    // use our data to change the DOM
    renderCart();

    itemInput.value = ""; // Clear the input field
});

removeItemButton.addEventListener("click", function () {
    // Remove last item from cart array
    cart.pop();

    // recreate out ouput based off our updated array
    renderCart();
});


function renderCart() {

    // Clear existing list (emptying the <ul></ul>)
    cartList.innerHTML = "";

    // creating and adding <li> to our <ul> based off of the elements in our cart array
    for (let i = 0; i < cart.length; i++) {

        // create the <li>
        let listItem = document.createElement("li");

        console.log(cart[i]);

        // use the data from the cart to add text to our new <li>
        listItem.innerText = cart[i];

        console.log(cart)

        // add the <li> to the <ul> (and make it appear on our page!)
        cartList.appendChild(listItem);
    }
}


// let greeting = "Hello World!";

// for (let i = 0; i < greeting.length; i++) {
//     console.log(greeting[i]);
// }