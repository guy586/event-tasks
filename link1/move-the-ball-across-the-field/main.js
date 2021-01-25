const field = document.getElementById("field");
const ball = document.getElementById("ball");
field.addEventListener('click', moveball)

function moveball() {
    let fieldCoords = this.getBoundingClientRect();
    let topc = event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2;
    let leftc = event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2;
    if (topc < 0) {
        topc = 0;
    } if (leftc < 0) {
        leftc = 0;
    } if (leftc + ball.clientWidth > field.clientWidth) {
        leftc = field.clientWidth - ball.clientWidth;
    } if (topc + ball.clientHeight > field.clientHeight) {
        topc = field.clientHeight - ball.clientHeight;
    }

    ball.style.top = `${topc}px`;
    ball.style.left = `${leftc}px`;
}