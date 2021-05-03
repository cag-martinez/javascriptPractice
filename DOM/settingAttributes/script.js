var main = document.querySelector(".main");
var sites = document.querySelector(".sites");
var site1 = document.querySelector('.site1');
var site2 = document.querySelector('.site2');
var site3 = document.querySelector('.site3');
var websites = ['https://www.google.com/', 'amazon.com', 'youtube.com'];
//first image
site1.children[1].children[0].setAttribute('src', 'images/image_1.jpg');
site1.children[1].children[0].setAttribute('alt', "Man working hard");
site1.children[1].setAttribute('href', 'https://www.google.com/');