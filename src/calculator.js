#!/usr/bin/env node

/**
 * Node.js CLI Calculator Application
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (×)
 * - Division (÷)
 */

const readline = require('readline');

// Create interface for reading user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Addition operation
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtraction operation
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Difference of a and b
 */
function subtract(a, b) {
  return a - b;
}

/**
 * Multiplication operation
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Product of a and b
 */
function multiply(a, b) {
  return a * b;
}

/**
 * Division operation
 * @param {number} a - Dividend
 * @param {number} b - Divisor
 * @returns {number} Quotient of a divided by b
 * @throws {Error} If divisor is zero
 */
function divide(a, b) {
  if (b === 0) {
    throw new Error('Error: Cannot divide by zero');
  }
  return a / b;
}

/**
 * Performs calculation based on operator
 * @param {number} num1 - First operand
 * @param {number} num2 - Second operand
 * @param {string} operator - Operation symbol (+, -, ×, /)
 * @returns {number} Result of calculation
 */
function calculate(num1, num2, operator) {
  switch (operator) {
    case '+':
      return add(num1, num2);
    case '-':
      return subtract(num1, num2);
    case '*':
    case '×':
      return multiply(num1, num2);
    case '/':
    case '÷':
      return divide(num1, num2);
    default:
      throw new Error('Invalid operator. Supported operators: +, -, *, ×, /, ÷');
  }
}

/**
 * Display calculator menu and instructions
 */
function displayMenu() {
  console.log('\n===== Node.js CLI Calculator =====');
  console.log('Supported Operations:');
  console.log('  [+]  Addition');
  console.log('  [-]  Subtraction');
  console.log('  [*]  Multiplication (or ×)');
  console.log('  [/]  Division (or ÷)');
  console.log('====================================\n');
}

/**
 * Main calculator loop
 */
function startCalculator() {
  displayMenu();

  const askForInput = () => {
    rl.question('Enter first number (or "exit" to quit): ', (input1) => {
      if (input1.toLowerCase() === 'exit') {
        console.log('Goodbye!');
        rl.close();
        return;
      }

      const num1 = parseFloat(input1);
      if (isNaN(num1)) {
        console.log('Invalid input. Please enter a valid number.\n');
        askForInput();
        return;
      }

      rl.question('Enter operator (+, -, *, /): ', (operator) => {
        rl.question('Enter second number: ', (input2) => {
          const num2 = parseFloat(input2);
          if (isNaN(num2)) {
            console.log('Invalid input. Please enter a valid number.\n');
            askForInput();
            return;
          }

          try {
            const result = calculate(num1, num2, operator);
            console.log(`\nResult: ${num1} ${operator} ${num2} = ${result}\n`);
          } catch (error) {
            console.log(`\n${error.message}\n`);
          }

          askForInput();
        });
      });
    });
  };

  askForInput();
}

// Run the calculator
if (require.main === module) {
  startCalculator();
}

// Export functions for testing
module.exports = {
  add,
  subtract,
  multiply,
  divide,
  calculate
};
