//DOM Selection
//document.getElementById()
const title = document.getElementById('title');
title.style.color = 'red';
title.style.backgroundColor = '#ccc';
title.innerHTML = 'Hello Mamat';

//document.getElementsByTagName()
const paragraphs = document.getElementsByTagName('p');
for (let i = 0; i < paragraphs.length; i++) {
    paragraphs[i].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = "50px";

//document.getElementsByClassName()
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'This is changed by Javascript DOM'