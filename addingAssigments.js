let todos = [];
const TDinp = document.querySelector('.todo-input');
let doneTODOS = []
const body = document.querySelector('body');
const list = document.querySelector('.todo-list');
const sections = document.querySelectorAll('.todo-sections button');
const clearBTN = document.querySelector('.clear-local-storage');







TDinp.addEventListener('keyup', (event) => {
    if (TDinp.value && event.keyCode === 13) {
        const item = {
            id: 'todo_' + Date.now(),
            content: TDinp.value,
        }
        todos.push(item)
        TDinp.value = '';
        list.appendChild(createTodoItem(item))
    }
});
sections.forEach(section => {
    section.addEventListener('click', () => {
        if (section.innerHTML === 'DONE') {
            refereshTodoList(doneTODOS, false);
            list.classList.add('centered');
            sections[0].classList.remove('active');
            sections[1].classList.add('active');
            TDinp.style.display = 'none';
            clearBTN.style.display = 'block'
        } else {
            refereshTodoList(todos, true)
            list.classList.remove('centered');
            sections[0].classList.add('active');
            sections[1].classList.remove('active');
            TDinp.style.display = 'block';
            clearBTN.style.display = 'none';
        }
    });
})

function createTodoItem(item, shouldShowButtons) {
    const todo = document.createElement('div');
    list.classList.add('morning');
    todo.classList.add('todo-' + item.id);
    todo.classList.add('todo')
    if (shouldShowButtons === true || shouldShowButtons === undefined) {
        todo.innerHTML = `<span>${item.content}</span>
        <button class="todo-remove" todo-id="${item.id}">REMOVE</button>
        <button class="todo-done" todo-id="${item.id}">DONE</button>`;    
    } else {
        todo.innerHTML = `<span>${item.content}</span>`;
    }
    return todo
}

const removeButton = document.querySelectorAll('.todo-remove');
list.addEventListener('click', (event) => {

    const target = event.target;
    const itemID = target.getAttribute('todo-id')
    if (itemID) {
        if (target.classList.contains('todo-remove')) {
            todos = todos.filter(item => item.id !== itemID);
        } else if (target.classList.contains('todo-done')) {
            const doneTodo = todos.find(item => item.id === itemID);
            todos = todos.filter(item => item.id !== itemID);
            doneTODOS.push(doneTodo);
        } list.querySelector('.todo-' + itemID).remove()

    }
})

function refereshTodoList(todos, shouldShowButtons) {
    list.innerHTML = '';
    todos.forEach(todo => list.appendChild(createTodoItem(todo, shouldShowButtons)))
}

const colorToggler = document.querySelector('.toggle');


colorToggler.addEventListener('click', (event) => {
    let spanItem = document.querySelectorAll('.todo-item-morning');
    body.style.transition = 'ease-in-out 500ms'
    body.classList.toggle('toggler');
    list.style.transition = 'ease-in-out 500ms';
    list.classList.toggle('toggler');
    list.classList.toggle('night');
    list.classList.toggle('morning');

})