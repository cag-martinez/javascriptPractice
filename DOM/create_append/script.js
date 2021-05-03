// Set the body to a variable

var body = document.body;

// Create all necessary elements

var h1tag = document.createElement('h1');
var h2tag = document.createElement('h2');
var image = document.createElement('img');
var ptag =  document.createElement('p');
var list = document.createElement('ol');
var li1 = document.createElement('li');
var li2 = document.createElement('li');
var li3 = document.createElement('li');

// Store the li elements in a variable

var listItems = document.getElementsByTagName("li");

// Set the text content of relevant elements

h1tag.textContent="Hi and welcome to my page";
h2tag.textContent='This HTML doc. was created using JavaScript and chrome dev tools';
ptag.textContent='This is mitten the cat';
list.textContent='Some of my favorite thigs to do with mitten are..'
li1.textContent='Go for walks';
li2.textContent='Run around the house';
li3.textContent='Watch TV together';


// Append all of the elements

document.body.appendChild(h1tag);
document.body.appendChild(h2tag);
document.body.appendChild(ptag);
document.body.appendChild(list);
document.body.appendChild(li1);
document.body.appendChild(li2);
document.body.appendChild(li3);

// Style all of the elements

h1tag.setAttribute('style', 'text-align: center')
h2tag.setAttribute('style', 'text-align: center')



