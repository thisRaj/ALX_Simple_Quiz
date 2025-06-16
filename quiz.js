// Define the checkAnswer function
function checkAnswer() {
    // Identify the correct answer
    const correctAnswer = "4";

    // Retrieve the user's selected answer
    // Selects the radio button that is checked and has the name "quiz"
    const selectedChoice = document.querySelector('input[name="quiz"]:checked');

    let userAnswer = "";
    // Check if a radio button was actually selected
    if (selectedChoice) {
        userAnswer = selectedChoice.value;
    }

    // Get the feedback element
    const feedbackElement = document.getElementById('feedback');

    // Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        // If correct, display success message
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.style.color = "#28a745"; // Green color for correct answer
    } else {
        // If incorrect, display error message
        feedbackElement.textContent = "That's incorrect. Try again!";
        feedbackElement.style.color = "#dc3545"; // Red color for incorrect answer
    }
}

// Add an event listener to the "Submit Answer" button
// Ensure the script runs after the DOM is fully loaded if this script tag is in the head
document.addEventListener('DOMContentLoaded', function() {
    const submitButton = document.getElementById('submit-answer');
    if (submitButton) {
        submitButton.addEventListener('click', checkAnswer);
    }
});