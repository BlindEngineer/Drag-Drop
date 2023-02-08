const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');

console.log(item);

item.addEventListener('dragstart', dragstart);

item.addEventListener('dragend', dragend);

function dragstart(event) {
    event.target.classList.add('hold');
    setTimeout(() => event.target.classList.add('hide'), 0); //убирает исходник перетягиваемого элемента
}

function dragend(event) {
    event.target.classList.remove('hold', 'hide');
}

for (let placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover);
    placeholder.addEventListener('dragenter', dragenter);
    placeholder.addEventListener('dragleave', dragleave);
    placeholder.addEventListener('drop', dragdrop);
}

function dragover(event) {
    event.preventDefault();
}

function dragenter(event) {
    event.preventDefault();
    event.target.classList.add('hovered');
}

function dragleave(event) {
    event.target.classList.remove('hovered');
}

function dragdrop(event) {
    event.target.appendChild(item);
    event.target.classList.remove('hovered');
}