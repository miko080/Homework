
// Burger

const btn = document.querySelector('.header__burger')
const burger = document.querySelector('.burger')
const canselButton = document.querySelector('.cansel')
const body = document.body


const burgerOpen = () => {
    burger.classList.add('burger--opened')
    body.classList.add('no-scroll')
}
const burgerCansel = () => {
    burger.classList.remove('burger--opened')
    body.classList.remove('no-scroll')
}

btn.addEventListener('click', event => {
    event.preventDefault();
    burgerOpen();
});

canselButton.addEventListener('click', (event) => {
    event.preventDefault();
    burgerCansel();
});


burger.addEventListener('click', event => {
    const target = event.target

    if (target && target.classList.contains('burger') || target.classList.contains('cansel')) {
        burgerCansel()
    }
})

body.addEventListener('keydown', event => {
    if (event.code === 'Escape' && burger.classList.contains('burger--opened')) {
        burgerCansel()
    }
})

// // =====================================================================================





// // =====================================================================================

// // =========================