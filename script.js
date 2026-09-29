let angle = 0;

const line = document.getElementById("line");

setInterval(function () {
    angle += 2;
    line.style.transform = `rotate(${angle}deg)`;
}, 20);