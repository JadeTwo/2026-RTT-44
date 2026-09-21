// selects elements by class name
let liTags = document.getElementsByClassName('item');

// console.log(liTags);

for (let i = 0; i < liTags.length; i++) {
    liTags[i].innerText = 'Item ' + (i + 1);
}

// selects elements using a CSS selector
let liTags2 = document.querySelectorAll('.item');

// console.log(liTags2);

for (let i = 0; i < liTags2.length; i++) {
    liTags2[i].innerText = 'Item ' + (liTags2.length - i);
}

// event delegation example
const productList = document.getElementById('product-list');
const addProductButton = document.getElementById('add-product');

// Event delegation for the product list
productList.addEventListener('click', (event) => {

    // adding a red border to whatever we clicked on in the UL
    event.target.classList.add('red-border');

    // event.target.tagName === "LI"
    console.log(event.target.classList)

    // check if we clicked on a button specifically (which has this class)
    if (event.target.classList.contains('add-to-cart')) {
        const productId = event.target.closest('li').dataset.id; 
        alert(`Added product ${productId} to cart.`);
    }
});

// Dynamically add a new product
addProductButton.addEventListener('click', () => {
    const newProduct = document.createElement('li');
    newProduct.dataset.id = '3';
    newProduct.innerHTML = 'Product 3 <button class="add-to-cart">Add to Cart</button>';
    productList.appendChild(newProduct);
});

// use classList to add some styling to element
productList.classList.add('red-border');
productList.classList.remove('red-border');
// toggle would add in this case (because it was already removed)
productList.classList.toggle('red-border');

// inline styling (alternative)
// productList.style.border = "3px solid red";

// using document fragment (for performance and efficiency)
const batchList = document.getElementById('batch-list');
const batchAddButton = document.getElementById('batch-add');

batchAddButton.addEventListener('click', () => {
  // creating a temporary container ("fragment")
  const fragment = document.createDocumentFragment();

  for (let i = 1; i <= 100; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = `Item ${i}`;
    fragment.appendChild(listItem);
  }

  // when we append the fragment it will append the elements inside of it
  batchList.appendChild(fragment);
});

// remove our productList
productList.remove();