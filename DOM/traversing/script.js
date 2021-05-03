let article = document.getElementById('articles');
let main = document.getElementById('main');

article.children[0].style.fontSize="100px";
article.children[0].lastElementChild.style.color="red";
article.previousElementSibling.style.backgroundColor="gray";

main.childNodes[1].style.textDecoration="underline";
main.lastElementChild.style.fontSize="10px"
main.lastElementChild.style.textDecoration="underline"
main.firstElementChild.style.color="black";
main.lastElementChild.parentElement.style.fontSize="30px"

article.children[0].lastElementChild.style.border="dotted"
article.children[0].style.textDecoration="dotted"