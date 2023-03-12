// $('.burger, .overlay').click(function() {
//     $('.burger').toggleClass('clicked');
//     $('.overlay').toggleClass('show');
//     $('nav').toggleClass('show');
//     $('body').toggleClass('overflow');
// });
const burgerMenu = document.querySelector('.burger-menu');
const menu = document.querySelector('.menu');

burgerMenu.addEventListener('click', () => {
  menu.classList.toggle('show');
});
