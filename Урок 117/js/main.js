
// Burger

(function () {

    document.addEventListener('click', burgerInit)
    function burgerInit(e) {

        const burgerIcon = e.target.closest('.burger-icon')
        const burgerNavLink = e.target.closest('.nav__link')

        if (!burgerIcon && !burgerNavLink) return

        if (document.documentElement.clientWidth > 900) return

        if (!document.body.classList.contains('body--opened-menu')) {

            document.body.classList.add('body--opened-menu')
        } else {
            document.body.classList.remove('body--opened-menu')
        }
    }
})()

// =====================================================================================

// modal

const btn = document.querySelector('.about__img-button')
const modal = document.querySelector('.modal')
const cancelButton = document.querySelector('.modal__cancel')
const body = document.body


const modalOpen = () => {
    modal.classList.add('body--modal-opened')
    body.classList.add('no-scroll')
}
const modalCansel = () => {
    modal.classList.remove('body--modal-opened')
    body.classList.remove('no-scroll')
}

btn.addEventListener('click', event => {
    event.preventDefault(); 
    modalOpen();
});

cancelButton.addEventListener('click', (event) => {
    event.preventDefault();
    modalCansel();
});


modal.addEventListener('click', event => {
    const target = e.target

    if (target && target.classList.contains('modal') || target.classList.contains('modal__cancel')) {
        modalCansel()
    }
})

body.addEventListener('keydown', event => {
    if (event.code === 'Escape' && modal.classList.contains('body--modal-opened')) {
        modalCansel()
    }
})

// =====================================================================================

// Tab

const tabControls = document.querySelector('.tab-controls')

tabControls.addEventListener('click', togglleTab)

function togglleTab(e) {
    const tabControl = e.target.closest('.tab-controls__link')

    if (!tabControl) return
    e.preventDefault()
    if (tabControl.classList.contains('tab-control__link--active')) return


    const tabContentID = tabControl.getAttribute('href')
    const tabContent = document.querySelector(tabContentID)
    const activeControl = document.querySelector('.tab-control__link--active')
    const activeContent = document.querySelector('.tab-content--show')


    if (activeContent) {
        activeControl.classList.remove('tab-control__link--active')
    }
    if (activeControl) {
        activeContent.classList.remove('tab-content--show')
    }


    activeControl.classList.remove('tab-control__link--active')
    activeContent.classList.remove('tab-content--show')

    tabControl.classList.add('tab-control__link--active')
    tabContent.classList.add('tab-content--show')
}

// =================================================================
// Accordion

const accordionLists = document.querySelectorAll('.accordion-list');

accordionLists.forEach(el => {
    el.addEventListener('click', (e) => {

        const accordionList = e.currentTarget
        const accordionOpenedItem = accordionList.querySelector('.accordion-list__item--opened')
        const accordionOpenedContent = accordionList.querySelector('.accordion-list__item--opened .accordion-list__content')

        const accordionControl = e.target.closest('.accordion-list__control');
        if(!accordionControl) return
        const accordionItem = accordionControl.parentElement;
        const accordionContent = accordionControl.nextElementSibling;

        if(accordionOpenedItem && accordionItem != accordionOpenedItem) {
            accordionOpenedItem.classList.remove('accordion-list__item--opened');
            accordionOpenedContent.style.maxHeight = null;
        }
        accordionItem.classList.toggle('accordion-list__item--opened');

        if(accordionItem.classList.contains('accordion-list__item--opened')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = null;
        }

    })
})