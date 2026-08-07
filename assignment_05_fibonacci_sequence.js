// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 5
// =============================================================================
//
// TASK: Fibonacci Sequence Generator
//
// The Fibonacci sequence is a series of numbers where each number is the sum
// of the two numbers before it:
//
//   0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
//
// Write a JavaScript program with TWO parts, each implemented as a function.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_05_fibonacci_sequence.js
//
// -----------------------------------------------------------------------------
// PART A — Print the First N Terms
// -----------------------------------------------------------------------------
// - Ask the user how many terms (N) to display.
// - Print the first N numbers of the Fibonacci sequence on one line.
//
// Example:
//   How many terms? 7
//   Fibonacci sequence: 0 1 1 2 3 5 8
//
// -----------------------------------------------------------------------------
// PART B — Check if a Number Belongs to the Sequence
// -----------------------------------------------------------------------------
// - Ask the user to enter a number.
// - Determine whether that number is a Fibonacci number.
// - Print an appropriate message.
//
// Example:
//   Enter a number to check: 13
//   13 is a Fibonacci number.
//
//   Enter a number to check: 20
//   20 is NOT a Fibonacci number.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use a loop (not recursion) to generate the sequence in both parts.
// - N must be a positive integer. If it is not, print an error message.
// - Each part must be implemented in its own function (see scaffold below).
//

//
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================
const readline = require('readline-sync');

function printFibonacciTerms() {
  const input = readline.question('How many terms? ');
  const n = Number(input);

  if (!Number.isInteger(n) || n <= 0) {
    console.log('Error: Please enter a positive integer.');
    return;
  }

  let sequence = [];
  let a = 0;
  let b = 1;

  for (let i = 0; i < n; i++) {
    sequence.push(a);
    let next = a + b;
    a = b;
    b = next;
  }

  console.log(`Fibonacci sequence: ${sequence.join(' ')}`);
}

function checkFibonacciNumber() {
  const input = readline.question('Enter a number to check: ');
  const target = Number(input);

  if (isNaN(target) || target < 0) {
    console.log('Error: Please enter a non-negative number.');
    return;
  }

  if (target === 0 || target === 1) {
    console.log(`${target} is a Fibonacci number.`);
    return;
  }

  let a = 0;
  let b = 1;

  while (b < target) {
    let next = a + b;
    a = b;
    b = next;
  }

  if (b === target) {
    console.log(`${target} is a Fibonacci number.`);
  } else {
    console.log(`${target} is NOT a Fibonacci number.`);
  }
}

printFibonacciTerms();
checkFibonacciNumber();

