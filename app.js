let todos = [];

let todoInput = document.querySelector('#todo-input');
let addBtn = document.querySelector('#add-btn');
let deleteAllBtn = document.querySelector('#delete-btn');
let todoForm = document.querySelector('#todo-form');
let todoList = document.querySelector('#todo-list');

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    todos.push(`${todos.length + 1}. ${todoInput.value}`);
    let node = document.createElement('li');
    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = 'Delete';
    deleteBtn.className = 'delete-btn';

    deleteBtn.addEventListener('click', (e) => {
        e.preventDefault();
        deleteTodo(e);
    });

    let textnode = document.createTextNode(`${todos.length}. ${todoInput.value}`);
    node.appendChild(textnode);
    node.appendChild(deleteBtn);
    todoList.appendChild(node);
    todoInput.value = '';
});

deleteAllBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (todos.length > 0) {
        todos = [];
        while (todoList.firstChild) {
            todoList.removeChild(todoList.firstChild);
        }
    } else alert('There is nothing to delete');
});

const deleteTodo = (e) => {
    let [todoInd, text] = e.target.parentElement.innerText.split('.');
    
    todos = todos.filter(item => {
        let [itemInd, itemTxt] = item.split('.');
        if (itemInd !== todoInd) return item;
        else return ''
    });

    while (todoList.firstChild) {
        todoList.removeChild(todoList.firstChild);
    }

    for (let i = 0; i < todos.length; i++) {
        let node = document.createElement('li');
        let deleteBtn = document.createElement('button');
        deleteBtn.innerHTML = 'Delete';
        deleteBtn.className = 'delete-btn';
        deleteBtn.addEventListener('click', function(e) {
            e.preventDefault();
            deleteTodo(e);
        })
        let textnode = document.createTextNode(todos[i]);
        node.appendChild(textnode);
        node.appendChild(deleteBtn);
        todoList.appendChild(node);
    }
};