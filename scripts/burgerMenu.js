export function mobileMenu() {
  const mobileMenu = document.querySelector('.header__nav');
  const burger = document.querySelector('.header__burger');
  const overlay = document.querySelector('.overlay');
  const body = document.querySelector('.page')

  burger.addEventListener('click', () => {
    overlay.classList.toggle('active');
    mobileMenu.classList.toggle('open');
    burger.classList.toggle('open')
    body.classList.toggle("isBlock");
  })
}