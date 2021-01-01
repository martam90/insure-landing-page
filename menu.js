let toggleBtn = document.querySelector('.nav__open');
let menu = document.querySelector('.nav__list');
let menuBottom = document.querySelector('.nav__bottom');
let closeBtn = document.querySelector('.nav__close');

toggleBtn.addEventListener('click', () => {
    menu.classList.add('active');
    menuBottom.classList.add('active');
    toggleBtn.classList.add('active');
    closeBtn.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');
    menuBottom.classList.remove('active');
    toggleBtn.classList.remove('active');
    closeBtn.classList.remove('active');
});


