console.log(document);

// select an element by id
// let h1 = document.getElementById("heading");

// console.log(h1.innerText)
// h1.innerText = "Goodbye"
// console.log(h1.innerText)

// select an element based off a CSS selector
// let element = document.querySelector('div');

// console.log('element: ', element);

// select the body element and replace all the HTML
// document.body.innerHTML = "<ul></ul>"

// select our img with pikachu
// let img = document.querySelector('img');
// console.log(img);

// change the img from pikachu to...
// img.src = "https://static.wikia.nocookie.net/pkmncollectors/images/c/c3/SurfingPikachu.png"
// img.alt = "a picture of a pikachu on a pink surfboard (that I do not own)"

console.dir(document);

// a function that creates a pikachu
function createPikachu() {

    alert('Creating Pikachu...')

    // select the element where we want pikachu to appear
    let section = document.querySelector('section');

    // create a new element (img)
    let img = document.createElement("img");

    // change the border of our pikachu image
    img.style.border = "5px solid yellow";

    // change the img from pikachu to...
    img.src = "https://static.wikia.nocookie.net/pkmncollectors/images/c/c3/SurfingPikachu.png"
    img.alt = "a picture of a pikachu on a pink surfboard (that I do not own)"


    
    // add our img to our section
    section.appendChild(img);
}

function randomColor() {
    // Math.random()
}

// run the createPikachu function
// createPikachu();

// more pikachu!
// createPikachu();
// createPikachu();
// createPikachu();


// select the button
let button = document.querySelector('button');

// add an event listener to the button (to respond to a user click)
button.addEventListener("click", createPikachu);