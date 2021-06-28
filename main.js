// Abre e fecha menu
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

// Fechar quando clicar em algo no menu
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

//Carousel slider swiper
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true,
  setWrapperSize: true
})

//ScrollReveal
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  durantion: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text, #home .image-1,
  #about .image-2, #about .text, #about .container-p,
  #archive .text, #archive .image-3,
  #footer .insta`,
  { interval: 50 }
)

//Back top button
const backToTopButton = document.querySelector('.back-to-top')
window.addEventListener('scroll', function () {
  if (window.scrollY >= 100) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
})
