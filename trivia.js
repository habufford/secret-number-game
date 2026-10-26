const questions = [
	"What planet do we live on?",
	"What color is the sky on a clear day?",
	"What animal says meow?"
];

const answers = ["earth", "blue", "cat"];

const quotes = [
	"The secret of getting ahead is getting started. - Mark Twain",
	"Believe you can and you're halfway there. - Theodore Roosevelt",
	"It always seems impossible until it's done. - Nelson Mandela",
	"Great things are done by a series of small things brought together. - Vincent van Gogh",
	"The future depends on what you do today. - Mahatma Gandhi"
];

function showDateTime() {
	const element = document.getElementById("date-time");
	if (!element) return;

	const now = new Date();
	const dateText = now.toLocaleDateString("en-US", {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric"
	});
	const timeText = now.toLocaleTimeString("en-US", {
		hour: "numeric",
		minute: "2-digit"
	});
	element.textContent = `Today is ${dateText}. It is ${timeText}.`;
}

function greetUser() {
	const element = document.getElementById("greeting");
	if (!element) return;

	let name = prompt("What is your name?");
	name = name && name.trim() ? name.trim() : "Guest";
	name = name.charAt(0).toUpperCase() + name.slice(1);

	const hour = new Date().getHours();
	const greeting = hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";
	element.textContent = `${greeting}, ${name}!`;
}

function getUserInfo() {
	const element = document.getElementById("user-info");
	if (!element) return;

	const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	let email;
	while (true) {
		email = prompt("Please enter your email address:");
		if (email === null) return;

		email = email.trim();
		if (emailPattern.test(email)) break;
		alert("That email address is not valid. Please try again.");
	}

	const [username, domain] = email.split("@");
	element.textContent = `Username: ${username.toUpperCase()} | Email domain: ${domain}`;
}

function showQuote() {
	const element = document.getElementById("quote");
	if (element) {
		element.textContent = quotes[Math.floor(Math.random() * quotes.length)];
	}
}

function quiz() {
	let points = 0;

	for (let i = 0; i < questions.length; i++) {
		let guesses = 3;
		while (guesses > 0) {
			const response = prompt(questions[i]);
			const answer = response === null ? "" : response.toLowerCase().trim();

			if (answer === answers[i]) {
				points += guesses;
				break;
			}

			guesses--;
			if (guesses > 0) {
				alert(`Not quite! Try again. Attempts remaining: ${guesses}`);
			} else {
				alert(`The correct answer was ${answers[i]}.`);
			}
		}
	}

	return points;
}

function runTriviaGame() {
	showDateTime();
	greetUser();
	getUserInfo();
	showQuote();

	const score = quiz();
	const maximumScore = questions.length * 3;
	const percentage = ((score / maximumScore) * 100).toFixed(2);
	const results = document.getElementById("quiz-results");

	if (results) {
		results.innerHTML =
			"<h2>Quiz Complete!</h2>" +
			`<p>You scored ${score} points out of ${maximumScore}.</p>` +
			`<p>Your score percentage is ${percentage}%.</p>`;
	}
}

if (document.readyState === "loading") {
	document.addEventListener("DOMContentLoaded", runTriviaGame, { once: true });
} else {
	runTriviaGame();
}
