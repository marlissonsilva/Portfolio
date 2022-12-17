// MENU MOBILE

const menuMobile = document.querySelector('.menu-mobile')
function showMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.querySelector('#nav')
    nav.classList.toggle('active')
}

menuMobile.addEventListener('touchstart', showMenu)
menuMobile.addEventListener('click', showMenu)

// HIDDEN MENU
let menuItens = document.querySelectorAll('.menu a');
menuItens.forEach(item => {
    item.addEventListener('click', hiddenMenu)
})

function hiddenMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.querySelector('#nav')
    nav.classList.remove('active')
}

menuItens.forEach(item => {
    item.addEventListener('click', scrollClick)
});

function scrollClick(event) {
    event.preventDefault()
    const element = event.target;
    const id = element.getAttribute('href');
    const to = document.querySelector(id).offsetTop;

    window.scroll({
        top: to - 65,
        behavior: 'smooth'
    })
}


// Animation scrool page itens

const root = document.documentElement;
root.className += "js";
function animeScroll() {
    const target = document.querySelectorAll(".anime");
    target.forEach((element) => {
        let contentPosition = element.getBoundingClientRect().top;
        let screenPosition = window.innerHeight * 0.65;
        if (contentPosition < screenPosition) {
            element.classList.add("animate");
        } else {
            element.classList.remove("animate");
        }
    });
}

animeScroll();

window.addEventListener("scroll", function () {
    animeScroll();
});






