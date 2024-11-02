(function() {
    
    document.addEventListener('click', burgerInit)
    function burgerInit (e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if(!burgerIcon && !burgerNavLink) return

        if(document.documentElement.clientWidth > 900) return

        if(!document.body.classList.contains('body--opened-menu')) {
            
            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }
    }
}) ()

// =====================================================================================

const btn = document.querySelector('.about__img-button')
const modal = document.querySelector('.modal')
const body = document.body


const modalOpen = () => {
    modal.classList.add('body--modal-opened')
    body.classList.add('no-scroll')
}
const modalCansel = () => {
    modal.classList.remove('body--modal-opened')
    body.classList.remove('no-scroll')
}

btn.addEventListener('click', modalOpen)

modal.addEventListener('click', event => {
    const target = event.target
    if(target && target.classList.contains('modal') || target.classList.contains('modal__cancel')) {
        modalCansel()
    }
})

body.addEventListener('keydown', event => {
    if(event.code === 'Escape' && modal.classList.contains('body--modal-opened')) {
        modalCansel()
    }
})