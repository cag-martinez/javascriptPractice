// Write code to loop through the array of currentNumbers
// At each iteration, if a currentNumber is evenly divisible by 3 print "Fizz"
// If a currentNumber is evenly divisible by 5 print "Buzz"
// If a currentNumber is evenly divisible by both 3 AND 5, print "Fizz Buzz"
// If a currentNumber is not divisible by 3 or 5, print the currentNumber

var fizzBuzz = function (arr) {

  for (var i = 0; i < arr.length; i++) {
    var currentNumber = arr[i];

    if (currentNumber % 3 === 0) {
      console.log("Fizz");
    } else if (currentNumber % 5 === 0) {
      console.log("Buzz");
    }
    else if (currentNumber % 15 === 0){
        console.log("Fizz Buzz")
    }
    else{
        console.log(currentNumber)
    }
  }
};
