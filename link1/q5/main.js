const title = document.querySelector('span');
const list = document.querySelector('ul');
title.onclick = function() {
    list.classList.toggle('view');
}