let article = document.getElementById('articles');
let main = document.getElementById('main');

article.children[0].style.fontSize="50px";
article.children[0].lastElementChild.style.Color="blue";
article.previousElementSibling.style.backgroundColor="black";

main.childNodes[1].style.textDecoration="underline";
main.lastElementChild.style.fontSize="50px"
main.firstElementChild.style.color="orange";
main.lastElementChild.parentElement.style.fontSize="40px"