		
	var quotes = [
	"Home is not a place but a feeling.",
	"When you have eliminated the impossible, whatever remains, however improbable, must be the truth. - Sherlock Holmes",
	"We know what we are, but know not what we may be. - W. Shakespeare",
	"Now i see it. People hate and fear what they do not understand. - Itachi",
	"People live their lives bound by what they accept as correct and true. That is how they define reality. - Itachi",
	"You know what i\'ve noticed? That people don't panic when things go \'according to plan\', even if the plan is horrifying. - Joker",
	"Madness as you know, is a lot like gravity, all it takes is a little push. - Joker",
	"Kind words costs nothing.",
	"It costs $0.00 to be nice.",
	"Respect is earned. Trust is gained. Loyalty is returned.",
	"I\'m at a place in my life where peace is my priority and negetivity cannot exist."
]
var currentQ = "";
var newQuote = function() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById("quoter").innerHTML = quotes[randomNumber];
  currentQ = $("#quoter").text();
}

var shareQ = function() {
  window.open("https://twitter.com/intent/tweet?text=" + currentQ)
}