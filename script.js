window.onload = function() {
    var name = prompt("Please enter your name to receive a special Independence Day greeting:");
    var messageElement = document.getElementById("greetingMessage");

    if (name) {
        var message = `Dear ${name}, Wishing you a very Happy 78th Independence Day! 🇮🇳 
        Let us remember the sacrifices of our brave freedom fighters and pledge to uphold the integrity and unity of our nation.`;
        messageElement.innerHTML = message;
    } else {
        messageElement.innerHTML = "Wishing you a very Happy 78th Independence Day! 🇮🇳";
    }
};
