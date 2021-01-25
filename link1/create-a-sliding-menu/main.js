const title = document.querySelector('span');
const list = document.querySelector('ul');
title.addEventListener('click', () => {
    list.classList.toggle('view');
});