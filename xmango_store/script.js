//welcome

alert("Welcome to mStores \n Where all your Mango Devices are :)");
var nom = prompt("What is your name?", "");
alert("Good to have you here " + nom);

//setting balance
const limit = 1000;
//asking your budget
var bucks = prompt("How much is your budget in pounds?", "Clear this and enter the digits only");
if (bucks > limit) {
    alert("Great! Now lets find the device that suits you");
} else if (bucks <= limit) {
    alert("You are kinda broke uno, \n You are welcome to check out our devices though!");
} else {
    alert("Please enter the figures only");
    prompt(bucks);
    alert("Go on and view the products then");
    }

//the btns

function answer() {
    if (bucks <= limit) {
        alert("Lol, you are broke remember?");
    } else {
        alert("Great Choice!");
       confirm("Would that be all?");
       alert("Nice!");
    }
}

//funct for marquee
var markee = setInterval (mar, 2000);
  function mar() {
      document.getElementById("marq");
  }

