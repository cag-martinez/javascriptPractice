var main = document.querySelector(".main");
var sites = document.querySelector(".sites");
var site1 = document.querySelector('.site1');
var site2 = document.querySelector('.site2');
var site3 = document.querySelector('.site3');
var titles = document.querySelectorAll('h4');
var websites = ['https://www.google.com/', 'https://www.amazon.com/', 'https://www.youtube.com/'];

//First image
site1.children[0].textContent='Site number one';
site1.children[1].children[0].setAttribute('src', 'images/image_1.jpg');
site1.children[1].children[0].setAttribute('alt', "Man working hard");
site1.children[1].setAttribute('href', 'https://www.google.com/');
site1.children[1].children[0].setAttribute('style', 'display:block; margin-left: auto; margin-righ: auto')
//Second site
site2.children[0].textContent='Site number two';
site2.children[1].children[0].setAttribute('src', "images/image_2.jpg");
site2.children[1].children[0].setAttribute('alt', 'Stand-up meeting');
site2.children[1].setAttribute('href', 'https://www.amazon.com/');
//Third site
site3.children[0].textContent='Site number three';
site3.children[1].children[0].setAttribute('src', 'images/image_3.jpg');
site3.children[1].children[0].setAttribute('alt', 'Group work');
site3.children[1].children[0].setAttribute('href', 'https://www.youtube.com/')
site3.children[1].children[0].setAttribute('style', 'display:block; margin-left: auto; margin-righ: auto')

for(var i = 0; i<titles.length; i++){
    titles[i].setAttribute('style', 'text-align: center; color: red')
}