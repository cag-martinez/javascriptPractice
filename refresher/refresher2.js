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

var array = ["a", "b", "c", "d", "e", "f"];
var total = 0;

for (i = 1; i < array.length; i++) {
  total += array[i];
}
console.log(array);
console.log(total);

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
// function random() {
//   return Math.floor(Math.random() * 5);
// }
// console.log(random());

// //get a random number between 5 and 15

// function randomNumber(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// var rando = randomNumber(1, 5);
// console.log(rando);
// console.log(randomNumber(5, 15));

// //Ternary check if a number is positive, negative or zero

// function checkNum(num) {
//   return num > 0 ? "Possitve" : num < 0 ? "Neggative" : "Zero";
// }
// // var digit = checkNum(2)
// var digit = checkNum(0);
// //var digit = checkNum(-2)
// console.log(digit);

// var concatFunc = function (arg1, arg2) {
//   return arg1.concat(arg2);
// };

// console.log(concatFunc([1, 2], [3, 4]));

// var conc = (one, two) => one.concat(two);
// console.log(conc([9, 8, 7], [6, 5, 4]));

// // filter the positive intergers and return the sqare of each number

// const numberList = [4, 5.6, -9.4, 3.14, 42, 6, 8.9, -2];

// const squaredNums = (num) => {
//   const intergers = num
//     .filter((arr) => Number.isInteger(arr) && arr > 0)
//     .map((x) => x * x);
//   return intergers;
// };
// const intergers = squaredNums(numberList);
// console.log(intergers);

// const materials = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

// console.log(materials.map((material) => material.length));

// const arr1 = ["jan", "feb", "march", "april"];

// let arr2;
// (function () {
//   arr2 = [...arr1];
//   arr1[0] = "december";
// })();

// console.log(arr1);
// console.log(arr2);
// const createPerson = (name, age, gender) => [name, age, gender];

// console.log(createPerson("tom", 29, "male"));

// function makeClass() {
//   class Vegetables {
//     constructor(name) {
//       this.name = name;
//     }
//   }
//   return Vegetables;
// }

// const Vegetables = makeClass();
// const carrot = new Vegetables("carrot");
// console.log(carrot.name);
// ///====================/////================///////=======
// function car() {
//   class Model {
//     constructor(year) {
//       this.year = year;
//     }
//   }
//   return Model;
// }

// const Model = car();
// const honda = new Model("honda");
// console.log(honda.year);

// function fruit(){
//     class TypeOfFruit{
//         constructor(variety){
//             this.variety = variety
//         }
//     }
//     return TypeOfFruit
// }

// const TypeOfFruit = fruit()
// const apple = new TypeOfFruit(["apple", "orange", "melon"])
// console.log(apple.variety)


function makeClass(){
    class Thermostat{
        constructor(temp){
            this._temp = 5/9 * (temp-32);
        }
        get temperature(){
            return this._temp
        }
        set temperature(updatedTemp){
            this._temp = updatedTemp
        }
    }

    return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;

console.log(temp)