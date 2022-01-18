//DOM Selection
//document.getElementById()
// const title = document.getElementById('title');
// title.style.color = 'red';
// title.style.backgroundColor = '#ccc';
// title.innerHTML = 'Hello Mamat';

//document.getElementsByTagName()
// const paragraphs = document.getElementsByTagName('p');
// for (let i = 0; i < paragraphs.length; i++) {
//     paragraphs[i].style.backgroundColor = 'lightblue';
// }

// const h1 = document.getElementsByTagName('h1')[0];
// h1.style.fontSize = "50px";

//document.getElementsByClassName()
// const p1 = document.getElementsByClassName('p1')[0];
// p1.innerHTML = 'This is changed by Javascript DOM'

//document.querySelector()
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';
// p4.style.fontSize = '30px';

// const item2 = document.querySelector('section#b ul li:nth-child(2)');
// item2.style.backgroundColor = 'orange';

//document.querySelectorAll()
// const p = document.querySelectorAll('p');
// for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'lightblue';
// }

//Narrowing the root node
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
p4.style.backgroundColor = 'orange';