
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



function flavors(){
    var iceCream = "vanilla";
    var result = " ";
    if (iceCream != "vanilla"){
        result = "true"
    } else{
        result = "false"}
    console.log(result);
}
flavors();