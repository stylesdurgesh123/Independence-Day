// window.onload = function() {
//     var name = prompt("Please enter your name to receive a special Independence Day greeting:");
//     if (name) {
//         var message = "Dear " + name + ", Wishing you a very Happy 78th Independence Day! 🇮🇳 Let us remember the sacrifices of our brave freedom fighters and pledge to uphold the integrity and unity of our nation.";
//         document.getElementById("greetingMessage").innerHTML = message;
//     } else {
//         document.getElementById("greetingMessage").innerHTML = "Wishing you a very Happy 78th Independence Day! 🇮🇳 Let us remember the sacrifices of our brave freedom fighters and pledge to uphold the integrity and unity of our nation.";
//     }
// }
// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Create video element
    const video = document.createElement('video');
    video.id = 'background-video';
    video.autoplay = true;
    video.loop = true;
    video.muted = true; // For autoplay to work across browsers
    video.playsInline = true;

    // Create source element
    const source = document.createElement('source');
    source.src = '/video/Jana_Gana_Mana.mp4'; // Replace with the path to your video file
    source.type = 'video/mp4';

    // Append source to video
    video.appendChild(source);

    // Style video element
    video.style.position = 'absolute';
    video.style.top = '0';
    video.style.left = '0';
    video.style.width = '100%';
    video.style.height = '100%';
    video.style.objectFit = 'cover';
    video.style.zIndex = '-1'; // Place video behind other content

    // Append video to body
    document.body.appendChild(video);
});
