
// Burger

const btn = document.querySelector('.header__burger')
const burger = document.querySelector('.burger')
const canselButton = document.querySelector('.cansel')
const burgerLinks = document.querySelectorAll('.burger__link');
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

burgerLinks.forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('burger--opened');
    body.classList.remove('no-scroll')
  });
});


// // =====================================================================================

const open = document.querySelectorAll('.button')
const modal = document.querySelector('.modal')
const close = document.querySelector('.cansel')


const modalOpen = () => {
  modal.classList.add('modal--opened')
  body.classList.add('no-scroll')
}
const modalCansel = () => {
  modal.classList.remove('modal--opened')
  body.classList.remove('no-scroll')
}

open.forEach((button) => {
  button.addEventListener('click', modalOpen);
});

close.addEventListener('click', (event) => {
  event.preventDefault();
  modalCansel();
});

modal.addEventListener('click', (event) => {
  const target = event.target
  if (target && target.classList.contains('modal') || target.classList.contains('cansel')) {
    modalCansel()
  }
})

body.addEventListener('keydown', event => {
  if (event.code === 'Escape' && modal.classList.contains('modal--opened')) {
    modalCansel()
  }
});

// ===============================

// INPUT

document.addEventListener('DOMContentLoaded', () => {
  // Получаем инпуты
  const dateInput = document.querySelector('.input__date');
  const timeInput = document.querySelector('.input__time');

  if (dateInput) {
    dateInput.addEventListener('focus', () => {
      dateInput.setAttribute('type', 'date');
    });

    dateInput.addEventListener('blur', () => {
      if (!dateInput.value) {
        dateInput.setAttribute('type', 'text');
      }
    });
  }

  if (timeInput) {
    timeInput.addEventListener('focus', () => {
      timeInput.setAttribute('type', 'time');
    });

    timeInput.addEventListener('blur', () => {
      if (!timeInput.value) {
        timeInput.setAttribute('type', 'text');
      }
    });
  }
});

