// MENU MOBILE



const menuMobile = document.querySelector('.menu-mobile')
function showMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.querySelector('#nav')
    nav.classList.toggle('active')
    if (nav.classList.contains('active')) {
        document.body.style.overflow = 'hidden'
    } else {
        document.body.style.overflow = 'visible'
    }
}

menuMobile.addEventListener('touchstart', showMenu)
menuMobile.addEventListener('click', showMenu)

// HIDDEN MENU
let menuItens = document.querySelectorAll('.menu a');
menuItens.forEach(item => {
    item.addEventListener('click', hiddenMenu);
    // item.addEventListener('click', scrollClick);
    item.addEventListener('click', activeLink);
})
var sections = document.querySelectorAll('.section');
var menu = document.querySelector('.menu');
var menuItems = menu.querySelectorAll('a');

window.addEventListener('scroll', function () {
    var scrollPos = window.scrollY + menu.offsetHeight;
    for (var i = 0; i < sections.length; i++) {
        var section = sections[i];

        if (scrollPos > section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
            menuItems[i].classList.add('active-link-menu');
        }
        else {
            menuItems[i].classList.remove('active-link-menu');
        }
    }
});

function activeLink() {
    menuItens.forEach((item) => {
        item.classList.remove('active-link-menu')
        this.classList.add('active-link-menu')
    });
}

function hiddenMenu(event) {
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.querySelector('#nav')
    nav.classList.remove('active')
    document.body.style.overflow = 'visible'
}

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


// VARIAVEIS


// EVENTOS


// FUNÇÕES


