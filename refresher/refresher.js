//Madlibs
// function libs(noun, adj, verb, adverb) {
//     var results = " ";
//     results += "the " + adj + noun + verb + adverb + " to the store";
//     return results;
// }
// console.log(libs("dog", "big", "ran", "quickly"))

// function names(one){
//     var allNames = " ";
//     allNames += "all names are " + one + "!!";
//     return allNames;
// }
// console.log(names("Chris"))

// var myArray = [[1,2,3,4,5],[6,7,8,9]];
// var remove = myArray.shift();

// console.log(remove)

// function reusable(){
//     console.log("Hello world")
//     console.log(reusable)
// }

// reusable();

// function add(a, b) {
//     console.log(a + b)
// }
// add(5, 6);

//create 2 functions and two global variables: one inside the first function and the other outside the functions
// check if the variables are in scope using an if statement

// var firstNum = 10;

// function functionOne() {
//     secondNum = 20;
// }

// function functionTwo() {
//     var output = " ";
//     if (typeof firstNum != "undefined"){
//         output += "The first number is: " + firstNum
//     }
//     if (typeof secondNum != "undefined") {
//         output += "The second number is: " + secondNum
//     }
//     console.log(output)
// }

// functionOne();
// functionTwo();

// function flavors(){
//     var iceCream = "vanilla";
//     var result = " ";
//     if (iceCream != "vanilla"){
//         result = "true"
//     } else{
//         result = "false"}
//     console.log(result);
// }
// flavors();

// function minus(e) {
//     return e - 8;
// }
// console.log(minus(12))

// function pluss(numbers) {
//     return numbers + 11;
// }
// console.log(pluss(10))
////////////////////////
// var change = 0;
// function refund(cash) {
//     return (12/2) + cash
// }
// change = refund(4)
// //===============================
// function nextInLine(arr, item){
// arr.push(item)
//     return arr.shift()
// }

// var testArr = [1,2,3,4,5];

// console.log("Before: " + JSON.stringify(testArr))
// console.log(nextInLine(testArr,6))
// console.log("After: " + JSON.stringify(testArr))

// function two(arr, item) {
//     arr.push(item)
//     return arr.unshift()

// }
// var testArr = [1,2,3,4,5];

// console.log("Before: " + (testArr))
// console.log(two(testArr,7))
// console.log("after: "+ (testArr))
// //================================================================
// function doesEqual(a, b) {
//   if (a === b) {
//     return "Yes, they are equal";
//   } else {
//     return "No, they are not equal";
//   }
// }
// console.log(doesEqual(5, 5));

// function another(c, d) {
//   if (c === d) {
//     return "Yup, we are equal";
//   } else {
//     return "Nope, we are not the same";
//   }
// }
// console.log(another(2, "a"));

// function comparison(value) {
//   if (value <= 10 && value >= 5) {
//     return "True";
//   } else {
//     return "false";
//   }
// }
// console.log(comparison(6));
// console.log(comparison(3));

// function compareTwo(val) {
//   if (val == 3 || val == 5) {
//     return "yes im  equal";
//   } else {
//     return "nope, try again";
//   }
// }
// console.log(compareTwo(3));
// console.log(compareTwo(4));

// function newfunction(number) {
//   if (number < 5) {
//     return "Less than 5";
//   } else if (number > 10) {
//     return " greater than 10";
//   } else {
//     return "the number is between 5 and 10";
//   }
// }
// console.log(newfunction(7));
// console.log(newfunction(25));
// console.log(newfunction(1));

// var names = [
//   "Hole-in-one",
//   "eagle",
//   "Birdie",
//   "Par",
//   "Bogie",
//   "Double-bougie",
//   "Go home",
// ];
// function golfScore(par, strokes) {
//   if (strokes == 1) {
//     return names[0];
//   } else if (strokes <= par - 2) {
//     return names[1];
//   } else if (strokes <= par - 1) {
//     return names[2];
//   } else if (strokes == par) {
//     return names[3];
//   } else if (strokes == par + 1) {
//     return names[4];
//   } else if (strokes == par + 2) {
//     return names[5];
//   } else if (strokes >= par + 3) {
//     return names[6];
//   } else {
//     return "Change me";
//   }
// }
// console.log(golfScore(5, 4));

// function checkSwitch(value){
//     var answer = ""
//     switch(value){
//         case 1:
//             answer = "alpha";
//             break;
//         case 2:
//             answer = "beta";
//             break;
//         case 3:
//             answer = "tango";
//         default:
//             answer = "Nothing here"
//     }
//     return answer
// }
// console.log(checkSwitch(6))
// //=======================================
// var count = 0

// function cc(card){
//     switch(card){
//         case 1:
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//         case 6:
//         case 7:
//         case 8:
//         case 9:
//             count++
//             break;
//         case 10:
//         case "K":
//         case "Q":
//         case "J":
//         case "A":
//             count--
//             break;
//     }

//     var bet = "hold";
//     if (count > 0){
//         bet = "bet!"
//     }
//     return count + ' ' + bet;
// }
// cc(22); cc(6); cc(18); cc("K"); cc("A")
// console.log(cc(4))

var myDog = {
  name: "Max",
  age: "2 years old",
  breed: "english bulldog",
};

function checkObject(prop) {
  if (myDog.hasOwnProperty(prop)) {
    return myDog[prop];
  } else {
    return "Prop not found";
  }
}
checkObject();
console.log(checkObject("name"));
console.log(myDog);

var myObject = {
  names: "max and athena",
  height: "seven",
  car: "honda",
};

function check(hasProp) {
  if (myObject.hasOwnProperty(hasProp)) {
    return myObject[hasProp];
  } else {
    return "no prop";
  }
}
console.log(check("car"));
console.log(check("breed"));
console.log(myObject);

var nestedObject = {
  usStates: {
    nc: "charlotte",
    tn: {
      nashville: "the gulch",
    },
  },
};
var myTown = nestedObject.usStates.tn.nashville;
console.log(myTown);
