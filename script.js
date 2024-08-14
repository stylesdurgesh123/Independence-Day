window.onload = function() {
    var name = prompt("Please enter your name to receive a special Independence Day greeting:");
    if (name) {
        var message = "Dear " + name + ", Wishing you a very Happy 78th Independence Day! 🇮🇳 Let us remember the sacrifices of our brave freedom fighters and pledge to uphold the integrity and unity of our nation.";
        document.getElementById("greetingMessage").innerHTML = message;
    } else {
        document.getElementById("greetingMessage").innerHTML = "Wishing you a very Happy 78th Independence Day! 🇮🇳 Let us remember the sacrifices of our brave freedom fighters and pledge to uphold the integrity and unity of our nation.";
    }
}
