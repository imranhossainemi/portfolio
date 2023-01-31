const menuBtn = document.querySelector('.mobile-nav-btm');
const navigation = document.querySelector('.navigation');
const logo = document.querySelector('.logo');
const navSec = document.querySelector('.navSec');
menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  navigation.classList.toggle('active');
  logo.classList.toggle('hide');
  navSec.classList.toggle('navSec2');
});
document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  menuBtn.classList.remove('active');
  navigation.classList.remove('active');
  navSec.classList.remove('navSec2');
  logo.classList.remove('hide');
}));

window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');
  header.classList.toggle('sticky', this.window.scrollY > 0);
});