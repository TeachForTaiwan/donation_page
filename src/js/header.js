const header = document.querySelector('.header');
const menu = header.querySelector('.header__nav .list');
const menuBtn = menu.querySelector('.menu-toggle');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('is-active');
});
