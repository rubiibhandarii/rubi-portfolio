/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId);

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show');
        });
    }
};
showMenu('nav-toggle', 'nav-menu');

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show');
}
navLink.forEach((n) => n.addEventListener('click', linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document
                .querySelector('.nav__menu a[href*=' + sectionId + ']')
                .classList.add('active');
        } else {
            document
                .querySelector('.nav__menu a[href*=' + sectionId + ']')
                .classList.remove('active');
        }
    });
}
window.addEventListener('scroll', scrollActive);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    //     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text', {});
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img', {
    delay: 400,
});
sr.reveal('.home__social-icon', { interval: 200 });
sr.reveal('.skills__data, .work__img', { interval: 200 });

/*SCROLL CONTACT*/
sr.reveal('.contact__subtitle', {});
sr.reveal('.contact__text', { interval: 200 });
sr.reveal('.contact__input', { delay: 400 });
sr.reveal('.contact__button', { delay: 600 });

const contactForm = document.querySelector('#contact-form');
contactForm.addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();

    const name = document.querySelector('#name-input').value;
    const email = document.querySelector('#email-input').value;
    const message = document.querySelector('#message-input').value;

    sendEmail(name, email, message);
}

function sendEmail(name, email, message) {
    Email.send({
        Host: 'smtp.gmail.com',
        Username: 'jameskulu55@gmail.com',
        Password: 'rsxzqhxhbmneshfs',
        To: 'jameskulu55@gmail.com',
        From: 'jameskulu55@gmail.com',
        Subject: `${name} sent you a message on your website`,
        Body: `Name: ${name}<br />Email: ${email}<br /><br />${message}`,
    })
        .then((message) => {
            contactForm.reset();
            alert('Thank you for the message.');
        })
        .catch((err) => {
            alert('Something went wrong.');
        });
}
