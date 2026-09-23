let btn = document.querySelector('button');
let div = document.querySelector('div');
let body = document.querySelector('body');

btn.addEventListener('click', function(event) {
    console.log('Phase: Bubbling, Clicked on: ', event.target.tagName, 'Listener attached to: ', event.currentTarget.tagName);
})

div.addEventListener('click', function(event) {
    console.log('Phase: Bubbling, Clicked on: ', event.target.tagName, 'Listener attached to: ', event.currentTarget.tagName);
})

body.addEventListener('click', function(event) {
    console.log('Phase: Bubbling, Clicked on: ', event.target.tagName, 'Listener attached to: ', event.currentTarget.tagName);
})