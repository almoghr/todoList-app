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