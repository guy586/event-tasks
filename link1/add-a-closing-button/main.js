const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const div3 = document.querySelector("#div3");
const close1 = document.querySelector("#close1");
const close2 = document.querySelector("#close2");
const close3 = document.querySelector("#close3");
close1.addEventListener('click', () => {
    div1.style.display = "none";
});
close2.addEventListener('click', () => {
    div2.style.display = "none";
});
close3.addEventListener('click', () => {
    div3.style.display = "none";
});