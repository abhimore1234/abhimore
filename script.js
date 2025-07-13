AOS.init();
console.log("Hi’s AI & DS Portfolio Loaded Successfully!");


window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.transparent-navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled-navbar');
  } else {
    navbar.classList.remove('scrolled-navbar');
  }
});