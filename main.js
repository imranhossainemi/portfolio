const menuBtn = document.querySelector('.mobile-nav-btm');
const navigation = document.querySelector('.navigation');

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
  navigation.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  menuBtn.classList.remove('active');
  navigation.classList.remove('active');
}));

window.addEventListener('scroll', function () {
  const header = document.querySelector('.header');
  header.classList.toggle('sticky', this.window.scrollY > 0);
});