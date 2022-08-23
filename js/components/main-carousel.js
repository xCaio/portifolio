const btnRight = window.document.querySelector('.button-arrow.-right');
const btnLeft = window.document.querySelector('.button-arrow.-left');
const elements = window.document.querySelector('.elements');
let pixels = 300;

btnRight.addEventListener('click', function(){
    pixels +=100;
    elements.style = `transform: translateX(${pixels}px)`;
});

btnLeft.addEventListener('click', function(){
    pixels-=100;
    elements.style = `transform: translateX(${pixels}px)`;
});