
// // Burger

// // const Inputmask = require("./inputmask.min")

// (function () {

//     document.addEventListener('click', burgerInit)
//     function burgerInit(e) {

//         const burgerIcon = e.target.closest('.burger-icon')
//         const burgerNavLink = e.target.closest('.nav__link')

//         if (!burgerIcon && !burgerNavLink) return

//         if (document.documentElement.clientWidth > 900) return

//         if (!document.body.classList.contains('body--opened-menu')) {

//             document.body.classList.add('body--opened-menu')
//         } else {
//             document.body.classList.remove('body--opened-menu')
//         }
//     }
// })()

// // =====================================================================================

// // modal

// const btn = document.querySelector('.about__img-button')
// const modal = document.querySelector('.modal')
// const cancelButton = document.querySelector('.modal__cancel')
// const body = document.body


// const modalOpen = () => {
//     modal.classList.add('body--modal-opened')
//     body.classList.add('no-scroll')
// }
// const modalCansel = () => {
//     modal.classList.remove('body--modal-opened')
//     body.classList.remove('no-scroll')
// }

// btn.addEventListener('click', event => {
//     event.preventDefault();
//     modalOpen();
// });

// cancelButton.addEventListener('click', (event) => {
//     event.preventDefault();
//     modalCansel();
// });


// modal.addEventListener('click', event => {
//     const target = event.target

//     if (target && target.classList.contains('modal') || target.classList.contains('modal__cancel')) {
//         modalCansel()
//     }
// })

// body.addEventListener('keydown', event => {
//     if (event.code === 'Escape' && modal.classList.contains('body--modal-opened')) {
//         modalCansel()
//     }
// })

// // =====================================================================================

// // =========================
// // Слайдер отзывы

// new Swiper('.testimonials__slider', {

//     spaceBetween: 0,
//     slidesPerView: 1,
//     centeredSlides: true,

//     navigation: {
//         nextEl: '.testimonials__next',
//         prevEl: '.testimonials__prev',
//     },
//     scrollbar: {
//         el: '.swiper-scrollbar',
//         draggable: true,
//     },
//     breakpoints: {
//         1201: {
//             slidesPerView: 2.1,
//         },
//         901: {
//             slidesPerView: 1.5,
//         },
//     },
// });

// // ===========================================================
// // Input-Mask

// const telInputs = document.querySelectorAll('input[type="tel"]')

// const im = new Inputmask('+7(999) 999-99-99')
// im.mask(telInputs)