// TASK 1

// 1. Create an empty array called shoppingList.
let shoppingList = ['Apple', 'Orange', 'Banana'];

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

        // check if the item contains the searchTerm
        if (item.toLowerCase().includes(searchTerm.toLowerCase())) { 
            filter.push(item);
        }
    }

    return filter;
}

