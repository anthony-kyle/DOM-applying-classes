// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
  // The first example is done for you. Uncomment the line below and reload the browser.
  one();
    
  // Your turn! Create a new function called `two`, then call it from here.
  two();

  // Call function Three : Change background color to purple.
  three();

  // Make invisible objects visible
  makeVisible();
}

function one () {
  // First, we have to find the element:
  var one = document.getElementById('one');

  // Next, we apply a new CSS class to it:
  one.classList.add('blue');
}

// CREATE FUNCTION two HERE
function two() {
  // Find the element
  var two = document.getElementById('two');
  // Apply CSS class
  two.classList.add('green');
}
// CREATE FUNCTION three HERE
function three(){
  // Find the element
  var two = document.getElementById('three');
  // Apply CSS class
  two.classList.add('purple');
}
// CREATE FUNCTION makeVisible HERE
function makeVisible(){
  // find objects with invisible class
  var hidden = document.getElementsByClassName('invisible');
  // Apply visible to all elements in returned array
  for (i=0; i<hidden.length; i++){
    hidden[i].classList.replace('invisible', 'visible');
  }
}
