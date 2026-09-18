let age = 19;
 
// if statement (by itself)
// if (age == 18) {
//     console.log("You are eligible to vote.");
// } 

// if else statement (to handle what happens if false)
// if (age == 18) {
//     console.log("You are eligible to vote.");
// } else {
//     console.log("You are not old enough")
// }

let temperature = 25;
 
// else if statement (to handle more cases)
if (temperature > 30) {
  console.log("It's too hot!");
} else if (temperature < 10) {
  console.log("It's too cold!");
} else {
  console.log("The weather is just right.");
}

console.log('done');

// assignment operator: "="
// loose equality operator: "=="
// strict equality operator: "==="

// parseFloat("2") // "2" -> 2
// Number("2") // "2" -> 2


// switch statement

// switch (temperature) {
//     // in the case that temperature is 25
//     case 25: 
//         console.log('temperature is 25');
//         break;
//     case 30: 
//         console.log("temperature is 30 ... it's too hot");
//         break;
    
// }

// ask the user to enter a number between 1 and 3 

let choice; //prompt("Choose an option: 1. Start 2. Settings 3. Exit");
 
switch (choice) {
  case '1':
    console.log("Starting the game...");
    break;
  case '2':
    console.log("Opening settings...");
    break;
  case '3':
    console.log("Exiting the game...");
    break;
  default:
    console.log("Invalid option, please try again.");
}

// same example using the if statement

let choice2; // prompt("Choose an option: 1. Start 2. Settings 3. Exit");
 
if (choice2 === '1') {
  console.log("Starting the game...");
} else if (choice2 === '2') {
  console.log("Opening settings...");
} else if (choice2 === '3') {
  console.log("Exiting the game...");
} else {
  console.log("Invalid option, please try again.");
}

// 

// let grade = "A";

// switch (grade) {
//     case "A": 
//         console.log('You got an A. Great work!');
//         break;
//     case "B":
//     case "C": 
// }


// using the AND operator (&&)
console.log('the result of condition 1: ', 5 > 4 && 3 === 3 && 2 > 3);

// using the OR operator (||)
let result = 2 > 3 || 3 === 4 || 5 < 4 || 6 >= 1;
console.log('the result of condition 2: ', result);
