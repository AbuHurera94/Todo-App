var userInp = document.getElementById('user-inp')
var todosContainer = document.getElementById('todos-container')
var todos = []

function addTodo() {
    todos.push(userInp.value)
    console.log(todos);

    todosContainer.innerHTML = ''
    renderTodo()
}

function dltAll() {
    todos = []
    // console.log(todos);
    todosContainer.innerHTML = ''

}

function editTodo(editIndex) {
    console.log(editIndex);

    var updatedTodo = prompt("Edit your todo here")
    console.log(updatedTodo);


    todos[editIndex] = updatedTodo
    console.log(todos);

    todosContainer.innerHTML = ''
    // for (var i = 0; i < todos.length; i++) {
    //     console.log("====>", todos[i]);
    //     todosContainer.innerHTML += `<li> ${todos[i]}  <button onclick="editTodo(${i})">Edit </button> </li>`
    // }
    renderTodo()


}


function renderTodo() {
    for (var i = 0; i < todos.length; i++) {
        console.log("====>", todos[i]);
        todosContainer.innerHTML += `<li> ${todos[i]}  <button onclick="editTodo(${i})">Edit </button> </li>`
    }
}