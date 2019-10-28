var verb1 = prompt("Type a verb");
var adjective2 = prompt("Type an adjective");
var verb3 = prompt("Type a verb");
var noun4 = prompt("Type a noun (plural)");
var weapon5 = prompt("Type a weapon (plural)");
var adjective6 = prompt("Type an adjective");
var noun7 = prompt("Type a noun");
var verb8 = prompt("Type a verb");
var adjective9 = prompt("Type an adjective");
var number10 = prompt("Type a number");
var adjective11 = prompt("Type an adjective");
var adjective12 = prompt("Type an adjective");
adjective12 = adjective12.charAt(0).toUpperCase() + adjective12.slice(1);
    // code intial caps variable. joins to functions toUpperCase makes all upper case, slice reverts variable back to imput after first character
var verb13 = prompt("Type a verb");
var noun14 = prompt("Type a noun");
var verb15 = prompt("Type a verb");
var verb16 = prompt("Type a verb ending in -ed");
var noun17 = prompt("Type a noun");
var adjective18 = prompt("Type an adjective");

alert("Let's see what you wrote.")

var message = "To " + verb1 + ", or not to " + verb1 + ", that is the question: <br>";
message += "Whether ’tis more " + adjective2 + " in the mind to " +verb3 + "<br>";
message += "The " + noun4 + " and " + weapon5 + " of " + adjective6 + " fortune <br>";
message += "Or to take " + noun7 + " against a sea of troubles, <br>";
message += "And by opposing end them. To die -- to " + verb8 + "-- <br>";
message += "No more; and by a " + adjective9 + " to say we end <br>";
message += "The heartache, and the" + number10 + adjective11 + " shocks <br>";
message += "That flesh is heir to: ’tis a consummation <br>";
message += adjective12 + " to be wish’d. To die, to " + verb13 + "; <br>";
message += "To " + verb13 + "! perchance to dream -- ay, there’s the " + noun14 + "; <br>";
message += "For in that " + verb15 + " of death what dreams may come, <br>" ;
message += "When we have " + verb16 + " off this mortal " + noun17 + ", <br>" ;
message += "Must give us pause -- there’s the respect <br>";
message += "That makes calamity of so" + adjective18 + "life. <br>";

document.write(message);

