
// Question counter
var count = 0;

// Multidimensional array containing the questions,
// correct answer indexes, and three answer choices.
var questions = [
    [
        "What planet do we live on?",
        0,
        "Earth",
        "Mars",
        "Venus"
    ],
    [
        "What is the largest ocean on Earth?",
        1,
        "Atlantic Ocean",
        "Pacific Ocean",
        "Indian Ocean"
    ],
    [
        "What animal says meow?",
        2,
        "Dog",
        "Cow",
        "Cat"
    ]
];

// Initialize the game with a Play Game button
document.getElementById("prompt").innerHTML =
    '<button onclick="playGame()">Play Game</button>';

// Function to display the next question
function playGame() {

    // Get the current question
    var currentQuestion = questions[count];

    // Remove the question text from the array
    var questionText = currentQuestion.shift();

    // Remove the correct answer index
    var correctIndex = currentQuestion.shift();

    // Display the question
    document.getElementById("question").innerHTML =
        questionText;

    // Create the answer choices
    var answerList = "";

    for (var i = 0; i < currentQuestion.length; i++) {

        answerList +=
            '<li><a href="#" onclick="checkAnswer(' +
            i + ', ' + correctIndex +
            '); return false;">' +
            currentQuestion[i] +
            '</a></li>';
    }

    // Display the answer choices
    document.getElementById("answers").innerHTML =
        answerList;

    // Tell the user to select an answer
    document.getElementById("prompt").innerHTML =
        "<p>Click the best answer above.</p>";
}

// Function to check the selected answer
function checkAnswer(chosenIndex, correctIndex) {

    // Compare the selected answer with the correct answer
    if (chosenIndex === correctIndex) {

        document.getElementById("question").innerHTML =
            "Correct! Great job!";

    } else {

        document.getElementById("question").innerHTML =
            "Sorry, that answer is incorrect.";
    }

    // Increase the question counter
    count++;

    // Clear the previous answer choices
    document.getElementById("answers").innerHTML = "";

    // Check whether all questions have been answered
    if (count >= 3) {

        document.getElementById("prompt").innerHTML =
            '<p>You have completed the game!</p>' +
            '<button onclick="location.reload()">Restart Game</button>';

    } else {

        document.getElementById("prompt").innerHTML =
            '<button onclick="playGame()">Play Game</button>';
    }
}
