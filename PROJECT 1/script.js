let counterDisplayElem = document.querySelector('.counter-display'); //select the 3 dom elements
let counterMinusElem = document.querySelector('.counter-minus');
let counterPlusElem = document.querySelector('.counter-plus');


let count = 0; //place holder. Count starts from 0. Its the base

updateDisplay(); // function to update the value of count in the h1 tag & buttons

counterPlusElem.addEventListener("click",()=>{ //Arrow functions are a short syntax
    count++; // ++  adds 1 to the existing value
    updateDisplay();
}) ;

counterMinusElem.addEventListener("click",()=>{
    count--;
    updateDisplay();
});

function updateDisplay(){
    counterDisplayElem.innerHTML = count;
};