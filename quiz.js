// Function to check the user's answer
function checkAnswer() {
    // The correct answer is "4"
    let correctAnswer = "4";

    // Retrieve the user's selected answer
    let userAnswer = document.querySelector('input[name="quiz"]:checked');

    // If an answer is selected
    if (userAnswer) {
        userAnswer = userAnswer.value;

        // Check if the user's answer matches the correct answer
        if (userAnswer === correctAnswer) {
            document.getElementById('feedback').textContent = "Correct! Well done.";
        } else {
            document.getElementById('feedback').textContent = "That's incorrect. Try again!";
        }
    } else {
        // If no answer is selected
        document.getElementById('feedback').textContent = "Please select an answer!";
    }
}

// Add an event listener to the "Submit Answer" button
document.getElementById('submit-answer').addEventListener('click', checkAnswer);
