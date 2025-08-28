// filepath: /Users/kasey/Documents/workspace/july-2025-introduction-to-javascript-and-dom-manipulation-kasey-okm/script.js
// ===============================
// Part 1: JavaScript Basics
// ===============================

// Variable declarations and conditionals
let userName = "Alex";
let userAge = 20;

if (userAge >= 18) {
  console.log(`${userName} is an adult.`);
} else {
  console.log(`${userName} is a minor.`);
}

// Output to the page
document.getElementById('output').textContent = `Welcome, ${userName}!`;

// ===============================
// Part 2: Functions
// ===============================

// Function to calculate the sum of two numbers
function addNumbers(a, b) {
  return a + b;
}

// Function to format a greeting
function greetUser(name) {
  return `Hello, ${name}!`;
}

// Example usage
console.log(addNumbers(5, 7));
console.log(greetUser(userName));

// ===============================
// Part 3: Loops
// ===============================

// For loop example: populate a list
const fruits = ['Apple', 'Banana', 'Cherry'];
const list = document.getElementById('list');
for (let i = 0; i < fruits.length; i++) {
  const li = document.createElement('li');
  li.textContent = fruits[i];
  list.appendChild(li);
}

// While loop example: countdown
let count = 3;
while (count > 0) {
  console.log(`Countdown: ${count}`);
  count--;
}

// ===============================
// Part 4: DOM Manipulation
// ===============================

// 1. Change text content on button click
const toggleBtn = document.getElementById('toggleBtn');
let messageVisible = false;

toggleBtn.addEventListener('click', function() {
  if (!messageVisible) {
    document.getElementById('output').textContent = "Button clicked! Message shown.";
  } else {
    document.getElementById('output').textContent = `Welcome, ${userName}!`;
  }
  messageVisible = !messageVisible;
});

// 2. Add a new item to the list dynamically
function addFruit(fruit) {
  const li = document.createElement('li');
  li.textContent = fruit;
  list.appendChild(li);
}
addFruit('Dragonfruit');

// 3. Change the background color of the output div
document.getElementById('output').style.backgroundColor = '#d0f8ce';