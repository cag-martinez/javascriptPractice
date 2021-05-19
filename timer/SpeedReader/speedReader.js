var poem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dignissim arcu in est tempor, et tincidunt nisl lacinia. Nam sollicitudin posuere neque, non aliquam odio pellentesque sit amet. Vivamus aliquam, eros eget lacinia porta, nibh velit congue erat, a laoreet orci quam nec dolor. Nunc a varius mauris. Aenean quam odio, malesuada blandit posuere nec, imperdiet quis justo. Curabitur vulputate condimentum lacus et bibendum. Aliquam vel cursus felis, nec tincidunt nunc. Vestibulum id ipsum et felis ornare porta vel ut velit. Nulla rhoncus vitae mauris eu mollis. Mauris nibh sapien, commodo et risus vel, congue semper nulla. Donec massa nisi, facilisis sed sagittis nec, imperdiet non nisl. Sed aliquam viverra bibendum."
var words = poem.split('');

var text = document.getElementById('main');
var countdown = document.getElementById('countdown');
var readEl = document.getElementById("read");
var bodyElement = document.createElement('div')



// promp user for speed
var i = 0;
var milliseconds = prompt("How fast would you like to go?")


// start the timer
 function timeStart() {
   var timeLeft = 5

   let timeInterval = setInterval(function (){
        
      countdown.textContent='Time remaining ' + timeLeft;
        timeLeft -- ;

           if( timeLeft === 0){
            countdown.textContent='';
              speedRead();
              clearInterval(timeInterval);
           }
    }, 500);
    
 }


// pass each word at the set speed

function speedRead(){
   text.append(bodyElement)

   var poemInterval = setInterval(function(){
      if(words[i] === undefined){
         clearInterval(poemInterval);
      }else{
         text.textContent = words[i];
         i++
      }
   }, miliseconds) 
}
timeStart()