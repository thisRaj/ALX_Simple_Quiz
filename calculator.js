document.addEventListener('DOMContentLoaded', function() {
    // --- Arithmetic Functions ---

    /**
     * Adds two numbers.
     * @param {number} num1 - The first number.
     * @param {number} num2 - The second number.
     * @returns {number} The sum of num1 and num2.
     */
    function add(num1, num2) {
        return num1 + num2;
    }

    /**
     * Subtracts the second number from the first.
     * @param {number} num1 - The first number.
     * @param {number} num2 - The second number.
     * @returns {number} The difference of num1 and num2.
     */
    function subtract(num1, num2) {
        return num1 - num2;
    }

    /**
     * Multiplies two numbers.
     * @param {number} num1 - The first number.
     * @param {number} num2 - The second number.
     * @returns {number} The product of num1 and num2.
     */
    function multiply(num1, num2) {
        return num1 * num2;
    }

    /**
     * Divides the first number by the second. Handles division by zero.
     * @param {number} num1 - The numerator.
     * @param {number} num2 - The denominator.
     * @returns {number|string} The quotient of num1 and num2, or an error message if dividing by zero.
     */
    function divide(num1, num2) {
        if (num2 === 0) {
            return "Cannot divide by zero!";
        }
        return num1 / num2;
    }

    // --- Helper function to get input values and update result ---

    /**
     * Retrieves numbers from input fields, performs the specified operation,
     * and displays the result.
     * @param {function} operationFunction - The arithmetic function to execute (e.g., add, subtract).
     */
    function performCalculation(operationFunction) {
        // Get input elements
        const number1Input = document.getElementById('number1');
        const number2Input = document.getElementById('number2');
        const calculationResultSpan = document.getElementById('calculation-result');

        // Parse input values to floating-point numbers.
        // Use `|| 0` to default to 0 if the input is empty or not a valid number.
        const num1 = parseFloat(number1Input.value) || 0;
        const num2 = parseFloat(number2Input.value) || 0;

        // Perform the calculation using the provided function
        const result = operationFunction(num1, num2);

        // Display the result in the dedicated span
        calculationResultSpan.textContent = result;
    }

    // --- Attach Event Listeners ---

    // Get references to all buttons
    const addButton = document.getElementById('add');
    const subtractButton = document.getElementById('subtract');
    const multiplyButton = document.getElementById('multiply');
    const divideButton = document.getElementById('divide');

    // Add click event listeners to each button, calling performCalculation
    // with the respective arithmetic function
    addButton.addEventListener('click', function() {
        performCalculation(add);
    });

    subtractButton.addEventListener('click', function() {
        performCalculation(subtract);
    });

    multiplyButton.addEventListener('click', function() {
        performCalculation(multiply);
    });

    divideButton.addEventListener('click', function() {
        performCalculation(divide);
    });
});