const next = document.querySelector('.next');
const prev = document.querySelector('.prev');
const content = document.querySelector('.portfolio .container');
const cards = content.querySelectorAll('.portfolio-card');
const burger = document.querySelector('.header .header-burger');
const menu = document.querySelector('.header .menu');
const btn = document.querySelector('.top .to-top');



let index = 0;
let timer = null;


next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);
content.addEventListener('mouseover', () => clearTimeout(timer));
content.addEventListener('mouseleave', () => autoPlay())
burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    burger.classList.toggle('active')
})


// function
function autoPlay() {
    timer = setTimeout(nextSlide, 3000);
}

autoPlay();

function removeActives() {
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove('actived');

    }
    clearTimeout(timer);
    autoPlay()
}

function nextSlide() {
    removeActives();
    index++

    if (index === cards.length) {
        index = 0;

    }

    cards[index].classList.add('actived');

}

function prevSlide() {
    removeActives();
    if (index === 0) {
        index = cards.length;
    }

    index--;
    cards[index].classList.add('actived')
}

btn.addEventListener('click', () => {
    scrollTo({
        top: 0,
        behavior: 'smooth'
    })
})

window.addEventListener('scroll', () => {
    if (pageYOffset > 350) {
        btn.style.transform = 'scale(1)'
    } else {
        btn.style.transform = 'scale(0)'
    }
})