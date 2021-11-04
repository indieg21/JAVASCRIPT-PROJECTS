// 1. function to dipslay todos  
// 2. function to add todos.
// 3. function to store todos to localstorage.


let todos = [{title:"go for shopping", id:"1"},{title:"go for walk", id:"2"},{title:"walk puppies", id:"3"}];



let todoTitle = document.getElementById("todo-title");
let todoSubmit = document.getElementById("todo-submit");
let displayTodos = document.getElementById("display-todo");

todoSubmit.addEventListener("click", addTodo);

function addTodo() {
let title = todoTitle.value;
let id = " " + new Date().getTime();
todos.push({title:title, id:id})

}


function displayTodo() { // function to display todo.

    todos.forEach((todo) => { // Inside this parameter is our object. Start the loop for todo (Hiher order function)
        let element = document.createElement("p"); // create p element for each todo item
        element.innerText = todo.title; // this will add the text to the paragraph
        displayTodos.appendChild(element); // add the element to the dom which is the paragraph
    })

}

displayTodo();