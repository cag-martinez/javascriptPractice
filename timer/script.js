var timeElement = document.querySelector(".time");
var mainElement = document.getElementById("main");
var secondsLeft = 10;

function setTime(){
    var timerInterval = setInterval(function (){
        secondsLeft--;
        timeElement.textContent = secondsLeft+" seconds left before the color explosion.";

        if (secondsLeft === 0){
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}

function sendMessage(){
    timeElement.textContent=" ";

    var imgElement = document.createElement("img");
     imgElement.setAttribute("src", "images/image_1.jpg");
     mainElement.appendChild(imgElement);
}

setTime();