const todos = [];
const TDinp = document.querySelector('.todo-input');
const doneTODOS = []
const body = document.querySelector('body');
const list = document.querySelector('.todo-list');


body.addEventListener('keyup', (event) => {
    if (TDinp.value && event.keyCode === 13){
        const item = {
            id: Date.now(),
            content: TDinp.value,
        }
        todos.push(item)
        TDinp.value = '';
        list.appendChild(createTodoItem(item))
    }
});
function createTodoItem(item) {
    const todo = document.createElement('div');
    todo.classList.add('todo-item')
    todo.innerHTML =`<span class="span">${item.content}</span>
    <button class="todo-remove" todo-id="${item.id}">REMOVE</button>
    <button class="todo-done" todo-id="${item.id}">DONE</button>`
    return todo
}
