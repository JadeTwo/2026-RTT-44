// select elements
const button = document.getElementById("add");
const input = document.getElementById("item");
const ul = document.querySelector('ul');
const removeBtn = document.getElementById('remove');

// an empty array called shoppingList.
let shoppingList = [];


// a function called removeLastItem that removes the last item from the shoppingList array.
function removeLastItem() {
    // remove the last item of the array
    shoppingList.pop();
}

// afunction called displayList that logs all items in the shoppingList array to the console.
function displayList() {
    // log all items
    console.log(shoppingList);
}

// addItem function to only add the item if it is not already in the shoppingList array.
function addItem(item) {

    // if filter items returns an empty array, the item hasn't been added yet
    let itemsFound = filterItems(item.name)
    
    // check if any items with the given name were found
    if (itemsFound.length === 0) {
        shoppingList.push(item);
    }
    console.log(shoppingList);
}

// a function called filterItems that takes a search term as a parameter and 
// returns all items in the shoppingList that contain that search term (case-insensitive).
function filterItems(searchTerm) {

    // keep track of all items that match the searchTerm
    let filter = [];

    // item is an object (with name, price, quantity)
    for (let item of shoppingList) {
        // check if the item contains the searchTerm
        if (item.name.toLowerCase().includes(searchTerm.toLowerCase())) { 
            filter.push(item);
        }
    }

    return filter;
}

// create the output based off the data in shopping cart array
function renderCart() {

    // start with a clean slate (the <ul></ul> should be empty)
    ul.innerHTML = '';

    // loop over the shopping cart and turn each item into a <li></li>
    for (let item of shoppingList) {

        // create the output
        const li = document.createElement('li');
        const nameDiv = document.createElement('div');
        const priceDiv = document.createElement('div');
        const quantityInput = document.createElement('input');
        const removeBtn = document.createElement('button');

        // adding text to our elements here
        nameDiv.textContent = `name: ${item.name}`;
        priceDiv.textContent = `price: $${item.price}`;
        removeBtn.textContent = 'X';

        // adding some attributes to our elements
        quantityInput.type = 'number';
        quantityInput.value = item.quantity;

        // add these extra elements to the <li></li>
        li.appendChild(nameDiv);
        li.appendChild(priceDiv);
        li.appendChild(quantityInput);
        li.appendChild(removeBtn);

        // add it to the DOM (appending it to the <ul></ul>)
        ul.appendChild(li);
    }

}

// a JavaScript function that adds items to the array and updates the displayed list 
// dynamically when the button is clicked.

function handleClick() {

    // access the input value to get the item name
    const itemName = input.value;

    // create an item object
    const item = {
        name: itemName,
        price: 5,
        quantity: 1
    };

    // add the item to the shoppingList array
    addItem(item);
  
    // create the output based off the array 
    renderCart()
   
    // reset the input (so they can type a new item more easily)
    input.value = '';

    // focus on the input (so they don't have to click it again before typing)
    input.focus();
}

// make the button clickable
button.addEventListener('click', handleClick);

// another function that removes the last item and updates the displayed 
removeBtn.addEventListener('click', function() {
    // remove the last item (from the array)
    removeLastItem();

    // update the display (the <ul></ul>)
    renderCart();
})


