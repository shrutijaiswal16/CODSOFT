// Select the display element
const display = document.getElementById('display');

// Variables to store current input and operator
let currentInput = '';
let operator = '';
let previousInput = '';
let result = '';

// Add event listeners to each button
document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', (e) => {
    const value = e.target.innerText;

    if (!isNaN(value) || value === '.') {
      currentInput += value;
      updateDisplay(currentInput);
    } else if (value === 'C') {
      clearDisplay();
    } else if (value === 'DEL') {
      deleteLast();
    } else if (value === '=') {
      calculate();
    } else {
      setOperator(value);
    }
  });
});

// Function to update the display
function updateDisplay(value) {
  display.innerText = value;
}

// Function to clear the display and reset values
function clearDisplay() {
  currentInput = '';
  previousInput = '';
  operator = '';
  result = '';
  updateDisplay('0');
}

// Function to delete the last character from current input
function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  if (currentInput === '') {
    updateDisplay('0');
  } else {
    updateDisplay(currentInput);
  }
}

// Function to set the operator and store the previous input
function setOperator(op) {
  if (currentInput === '') return;
  operator = op;
  previousInput = currentInput;
  currentInput = '';
}

// Function to perform the calculation
function calculate() {
  if (previousInput === '' || currentInput === '' || operator === '') return;

  const num1 = parseFloat(previousInput);
  const num2 = parseFloat(currentInput);

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num2 !== 0 ? num1 / num2 : 'Error';
      break;
  }

  updateDisplay(result);
  currentInput = result.toString();
  previousInput = '';
  operator = '';
}
