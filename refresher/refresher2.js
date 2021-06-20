// var array = [];
// var i = 0;

// while ( i < 4){
//     array.push(i)
//     i++
// }
// console.log(array)


// var array2 = [];
//  for (var i = 0; i <= 10; i++){
//      array2.push(i)
//  }
//  console.log(array2)

//  var array3 = [1,2,3]

//  for (x = 0; x <= 5; x++){
//      array3.push(x)
//  }
//  console.log(array3)

var array = ["a","b","c","d","e","f"]
var total = 0

for (i = 1; i<array.length; i++){
    total += array[i]
}
console.log(array)
console.log(total)

//Multiply allt he numbers in the array of arrays

// function multiplyAll(array){
//     var product = 1;
//     for (var i=0; i<array.length; i++){
//         for (var j=0; j<array[i].length; j++){
//             product *= array[i][j]
//         }
//     }
//     return product
// }

// var product = multiplyAll([[1,2], [3,4,5], [6,7,8]]);
// console.log(product)

// var contacts = [
//     {
//         "firstName": "Akira",
//         "lastName": "Laine",
//         "number": "12345554",
//         "likes": ["Pizza", 'Burgers', "soda"]
//     },
//     {
//         "firstName": "Harry",
//         "lastName": "Potter",
//         "number": "5464536514",
//         "likes": ["Magic", 'Gaming', "water"]  
//     }
// ]

// function getContact(name, prop){
    
//     for (var i=0; i<contacts.length; i++){
//         if( contacts[i].firstName === name){
//             return contacts[i][prop] || "No name found"
//         }
//     }
//     return "nothing to be returned" 
// }

// var data =  getContact("Hary","lastName")
// console.log(data)

//var number = Math.floor(Math.random()*20)
function random(){
    return Math.floor(Math.random()*5)  
}
console.log(random())

//get a random number between 5 and 15

function randomNumber(min, max){
    return Math.floor(Math.random() * (max - min +1) + min)
}
var rando = (randomNumber(1,5))
console.log(rando)
console.log(randomNumber(5,15))

//Ternary check if a number is positive, negative or zero

function checkNum(num){
    return num > 0 ? "Possitve" : num < 0 ? "Neggative" : "Zero" 
}
// var digit = checkNum(2)
var digit = checkNum(0)
//var digit = checkNum(-2)
console.log(digit)