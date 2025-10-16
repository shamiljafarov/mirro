'use strict';

let burger__icon = document.getElementById("burger__icon");
let menu = document.querySelector('.header__wrapper__navbar');

burger__icon.addEventListener("click", () => {
    menu.classList.toggle('active');
})

menu.addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        menu.classList.remove('active');
    }
});