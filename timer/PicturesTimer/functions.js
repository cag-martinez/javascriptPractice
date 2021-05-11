var main = document.querySelector(".main");
var pictures = document.querySelector(".pictures");

var timeRemaining = 5;

function setTime() {
  var timerInterval = setInterval(function () {
    timeRemaining--;
    main.textContent =
      timeRemaining + " seconds remaining before the next picture!!";
    if (timeRemaining === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 500);
}

function sendMessage() {
  main.textContent = "";

  var imgElement = document.createElement("img");
  imgElement.setAttribute("src", "images/car1.jpg");
  //fix the style
  //imgElement.setAttribute("style", 'align-items: center')

  // Add a loop to look thorugh all of the images every 5 seconds

  pictures.appendChild(imgElement);
}



setTime();
