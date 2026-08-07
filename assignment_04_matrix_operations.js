// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');
function readMatrix(rows, cols) {
  let matrix = [];
  for (let i = 0; i < rows; i++) {
    let input = readlineSync.question(`Enter row ${i + 1}: `);
    let row = input.split(' ').map(Number);
    matrix.push(row);
  }
  return matrix;
}

function printMatrix(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let rowStr = '';
    for (let j = 0; j < matrix[i].length; j++) {
      rowStr += matrix[i][j] + '\t';
    }
    console.log(rowStr);
  }
}

function transposeMatrix(matrix) {
  let result = [];
  for (let j = 0; j < matrix[0].length; j++) {
    let newRow = [];
    for (let i = 0; i < matrix.length; i++) {
      newRow.push(matrix[i][j]);
    }
    result.push(newRow);
  }
  return result;
}

function addMatrices(matrixA, matrixB) {
  let result = [];
  for (let i = 0; i < matrixA.length; i++) {
    let row = [];
    for (let j = 0; j < matrixA[0].length; j++) {
      row.push(matrixA[i][j] + matrixB[i][j]);
    }
    result.push(row);
  }
  return result;
}

function multiplyMatrices(matrixA, matrixB) {
  let result = [];
  for (let i = 0; i < matrixA.length; i++) {
    let row = [];
    for (let j = 0; j < matrixB[0].length; j++) {
      let sum = 0;
      for (let k = 0; k < matrixA[0].length; k++) {
        sum += matrixA[i][k] * matrixB[k][j];
      }
      row.push(sum);
    }
    result.push(row);
  }
  return result;
}

console.log('PART A');
let rowsA = Number(readlineSync.question('Enter number of rows: '));
let colsA = Number(readlineSync.question('Enter number of columns: '));
let matrixA = readMatrix(rowsA, colsA);
console.log('Transposed Matrix:');
printMatrix(transposeMatrix(matrixA));

console.log('PART B');
let rowsB = Number(readlineSync.question('Enter number of rows: '));
let colsB = Number(readlineSync.question('Enter number of columns: '));
let addA = readMatrix(rowsB, colsB);
let addB = readMatrix(rowsB, colsB);
console.log('Sum:');
printMatrix(addMatrices(addA, addB));

console.log('PART C');
let rowsM1 = Number(readlineSync.question('Enter rows for Matrix A: '));
let colsM1 = Number(readlineSync.question('Enter cols for Matrix A / rows for Matrix B: '));
let colsM2 = Number(readlineSync.question('Enter cols for Matrix B: '));
let multA = readMatrix(rowsM1, colsM1);
let multB = readMatrix(colsM1, colsM2);
console.log('Product:');
printMatrix(multiplyMatrices(multA, multB));

