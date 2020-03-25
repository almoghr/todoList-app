const removeButton = document.querySelectorAll('.todo-remove');
list.addEventListener('click', (event) => {
    const target = event.target;
    const itemID = target.getAttribute('todo-id')
    if (target.classList.contains('todo-remove')){
        todos = todos.filter (item => item.id !== itemID);
    } else if (target.classList.contains('todo-done')){
        const doneTodo = todos.find(item => item.id === itemID);
        todos = todos.filter(item => item.id !== itemID);
        doneTODOS.push(doneTodo);
    }

    list.querySelector('.todo-' + itemID).remove()
})