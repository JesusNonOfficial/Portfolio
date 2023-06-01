const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

registerLink.addEventListener('click', () => {
    wrapper.classList.add('active');
})

loginLink.addEventListener('click', () => {
    wrapper.classList.remove('active');
})

btnPopup.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
})

iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
})


// ----------- DROPDOWN MENU ---------------- //

const menuIcon = document.querySelector('#menu-icon')

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle
})


// ----------- BOUTON BIENVENUE-------------- //


const button1 = document.getElementById("welcome-btn-inv")
const button2 = document.getElementById("welcome-btn");

button1.addEventListener("mouseover", function () {
    button2.classList.toggle("welcome-btn--active");
});

button1.addEventListener('mouseout', () => {
    button2.classList.remove('welcome-btn--active');
});




// ----------- page 3-------------- //
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
        else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

