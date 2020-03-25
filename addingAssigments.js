let todos = [];
const TDinp = document.querySelector('.todo-input');
let doneTODOS = []
const body = document.querySelector('body');
const list = document.querySelector('.todo-list');
const sections = document.querySelectorAll('.todo-sections button')
const doneBTN = document.querySelector('.todo-sections button .todo-done');
console.log(doneBTN);





TDinp.addEventListener('keyup', (event) => {
    if (TDinp.value && event.keyCode === 13){
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
        if (section.innerHTML === 'DONE'){
            refereshTodoList(doneTODOS);
            this.style.display = 'none'
        } else{
            refereshTodoList(todos)
        }
        refereshTodoList(section.innerHTML === 'DONE'? doneTODOS : todos)
        
    })
    })

function createTodoItem(item) {
    const todo = document.createElement('div');
    todo.classList.add('todo-item-morning');
    todo.classList.add('todo-' + item.id);
    todo.innerHTML =`<span>${item.content}</span>
    <button class="todo-remove" todo-id="${item.id}">REMOVE</button>
    <button class="todo-done" todo-id="${item.id}">DONE</button>`
    return todo
}

const removeButton = document.querySelectorAll('.todo-remove');
list.addEventListener('click', (event) => {

    const target = event.target;
    const itemID = target.getAttribute('todo-id')
    if(itemID){
    if (target.classList.contains('todo-remove')){
        todos = todos.filter (item => item.id !== itemID);
    } else if (target.classList.contains('todo-done')){
        const doneTodo = todos.find(item => item.id === itemID);
        todos = todos.filter(item => item.id !== itemID);
        doneTODOS.push(doneTodo);
    }    list.querySelector('.todo-' + itemID).remove()

}

})

function refereshTodoList(todos){
    list.innerHTML = '';
    todos.forEach(todo => list.appendChild(createTodoItem(todo)))
}

const colorToggler = document.querySelector('.toggle');
    

    colorToggler.addEventListener('click', (event) => {
    let spanItem = document.querySelectorAll('.todo-item-morning');
    body.style.transition = 'ease-in-out 500ms'
    body.classList.toggle('toggler');
    list.style.transition = 'ease-in-out 500ms';
    list.classList.toggle('toggler');
    spanItem.forEach(element => {
        element.classList.toggle('todo-item-night')
    });     
    })