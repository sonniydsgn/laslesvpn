// LAZY LOADING
@@include("yall.min.js");
document.addEventListener("DOMContentLoaded", yall);

// FIXED HEADER
window.addEventListener('scroll', () => {
  const header = document.querySelector('header')
  header.classList.toggle('sticky', window.scrollY > 0)
})

// BURGER MENU
function toggleMenu () {
  const burger = document.querySelector('.burger')
  const nav = document.querySelector('.nav')
  const body = document.querySelector('body')

  burger.classList.toggle('show')
  nav.classList.toggle('show')
  body.classList.toggle('lock')
}

// SLIDER
@@include("swiper-bundle.min.js");

new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 50,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    1140: {
      slidesPerView: 3,
    },
    767: {
      slidesPerView: 2,
    }
  }
})