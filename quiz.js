let questions = [
    "What planet do we live on?",
    "What color is the sky on a clear day?",
    "What animal says meow?"
];let answers = [
    "earth",
    "blue",
    "cat"
];
function quiz() 
    {let points = 0;
    for (let i = 0; i < questions.length; i++) {
      let guesses = 3;  
        while (guesses > 0) {
            let response = prompt(questions[i]);
            response = response.toLowerCase().trim();
            if (response === answers[i]) {
                points += guesses;
                guesses = 0;
}           else {

    guesses--;

        }
    }  
}
return points;
}
let score = quiz();
document.getElementById("quiz-results").innerHTML =
    "<h2>Quiz Complete!</h2><p>You scored " + score + " points out of 9.</p>";