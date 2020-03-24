const colorToggler = document.querySelector('.toggle');
const spanItem = document.querySelectorAll('span');
console.log(spanItem);

    colorToggler.addEventListener('click', (event) => {
    body.style.transition = 'ease-in-out 500ms'
    body.classList.toggle('toggler')
    list.style.transition = 'ease-in-out 500ms'
    list.classList.toggle('toggler')
    })
