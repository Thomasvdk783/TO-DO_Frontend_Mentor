

// Selecteurs
const todoInput = document.getElementById('input-add-todo');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.container-task')


// Ecouteurs
todoButton.addEventListener('click', addTodo);

// Fonctions 
function addTodo(event) {
    event.preventDefault();
    // Todo Div
    const todoDiv = document.getElementById('#todo-container')
    console.log(todoDiv)
}
