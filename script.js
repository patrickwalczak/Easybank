'use strict';

const ham_menu = document.querySelector('.header__menu');
const overlay = document.querySelector('.overlay');
const mobile_menu = document.querySelector('.mobile_menu');
const body = document.querySelector('body');
const article_item = document.querySelectorAll('.article__item');
console.log(ham_menu);

ham_menu.addEventListener('click', function () {
  if (!ham_menu.classList.contains('open')) {
    // Opening menu
    body.classList.add('noscroll');
    ham_menu.classList.add('open');
    overlay.classList.add('fade-in');
    overlay.classList.remove('fade-out');
    mobile_menu.classList.add('fade-in');
    mobile_menu.classList.remove('fade-out');
  } else {
    // Closing menu
    body.classList.remove('noscroll');
    ham_menu.classList.remove('open');
    overlay.classList.remove('fade-in');
    overlay.classList.add('fade-out');
    mobile_menu.classList.remove('fade-in');
    mobile_menu.classList.add('fade-out');
  }
});

console.log('test');
