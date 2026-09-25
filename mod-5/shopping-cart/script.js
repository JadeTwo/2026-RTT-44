// TASK 1

// 1. Create an empty array called shoppingList.
let shoppingList = [];

// 2. Write a function called addItem that takes an item as a parameter and adds it to the shoppingList array.
// function addItem(item) {
//     // add the item to the end of the array 
//     shoppingList.push(item);
// }

// 3. Write a function called removeLastItem that removes the last item from the shoppingList array.
function removeLastItem() {
    // remove the last item of the array
    shoppingList.pop();
}

// 4. Write a function called displayList that logs all items in the shoppingList array to the console.
function displayList() {
    // log all items
    console.log(shoppingList);
}


// TASK 2

// 1. Modify the addItem function to only add the item if it is not already in the shoppingList array.
function addItem(item) {
    // add the item to the end of the array (if it's not already in the list)
    if (!shoppingList.includes(item)) {
        shoppingList.push(item);
    }
    // an alternative would be to use the filterItems function
}

// function isItemInArray(item) {

//     // for (let i = 0; i < shoppingList.length; i++) {
//     //     let item = shoppingList[i];
//     // }

//     for (let itemInCart of shoppingList) {
//         if (itemInCart === item) {
//             return true;
//         }
//     }
//     return false;
// }


// 2. Write a function called filterItems that takes a search term as a parameter and 
// returns all items in the shoppingList that contain that search term (case-insensitive).
function filterItems(searchTerm) {

    // keep track of all items that match the searchTerm
    let filter = [];

    for (let item of shoppingList) {

        // let lowerCaseItem = item.toLowerCase()
        // let lowerCaseSearchTerm = searchTerm.toLowerCase()

        // check if the item contains the searchTerm
        if (item.toLowerCase().includes(searchTerm.toLowerCase())) { 
        // if (lowerCaseItem.includes(lowerCaseSearchTerm)) {
            filter.push(item);
        }
    }

    return filter;
}


// TASK 3

// 2. Write a JavaScript function that adds items to the array and updates the displayed list 
// dynamically when the button is clicked.

const button = document.getElementById("add");
const input = document.getElementById("item");
const ul = document.querySelector('ul');

function handleClick() {

    // access the input value to get the item
    const item = input.value;

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

// create the output based off the data in shopping cart array
function renderCart() {

    // start with a clean slate (the <ul></ul> should be empty)
    ul.innerHTML = '';

    // loop over the shopping cart and turn each item into a <li></li>
    for (let item of shoppingList) {
        // create the output
        const li = document.createElement('li');

        // give our list item some text (the item's name)
        li.textContent = item;

        // add it to the DOM (appending it to the <ul></ul>)
        ul.appendChild(li);
    }

}

// 3. Write another function that removes the last item and updates the displayed 
// list when a “Remove Last Item” button is clicked.

const removeBtn = document.getElementById('remove');

removeBtn.addEventListener('click', function() {
    // remove the last item (from the array)
    removeLastItem();

    // update the display (the <ul></ul>)
    renderCart();
})


