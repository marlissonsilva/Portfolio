const dataModal = [
    {
        id: 0,
        title: 'hora do dia',
        video: 'https://marlissonsilva.com.br/images/arte-video.mp4',
        desc: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore alias accusantium excepturi id nobis velit! Reiciendis obcaecati quos, distinctio unde enim expedita. At unde modi non cum obcaecati nulla dolorem?',
        techs: [
            '<i class="fa-brands fa-html5"></i>',
            ' <i class="fa-brands fa-css3-alt"></i>',
            '<i class="fa-brands fa-square-js"></i>'],
        projeto: 'https://marlissonsilva.github.io/hora-do-dia/',
        repositorio: 'https://github.com/marlissonsilva/hora-do-dia',
    },
    {
        id: 1,
        title: 'arte e sorriso',
        video: './images/arte-video.mp4',
        desc: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore alias accusantium excepturi id nobis velit! Reiciendis obcaecati quos, distinctio unde enim expedita. At unde modi non cum obcaecati nulla dolorem?',
        techs: [
            '<i class="fa-brands fa-html5"></i>',
            ' <i class="fa-brands fa-css3-alt"></i>',
            '<i class="fa-brands fa-square-js"></i>'],
        projeto: 'https://marlissonsilva.github.io/arte-sorriso/',
        repositorio: 'https://github.com/marlissonsilva/arte-sorriso',
    },
    {
        id: 2,
        title: 'Collor Flipper',
        video: 'https://marlissonsilva.com.br/images/arte-video.mp4',
        desc: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore alias accusantium excepturi id nobis velit! Reiciendis obcaecati quos, distinctio unde enim expedita. At unde modi non cum obcaecati nulla dolorem?',
        techs: [
            '<i class="fa-brands fa-html5"></i>',
            ' <i class="fa-brands fa-css3-alt"></i>',
            '<i class="fa-brands fa-square-js"></i>'],
        projeto: 'https://marlissonsilva.github.io/Collor-Flipper/hex.html',
        repositorio: 'https://github.com/marlissonsilva/Collor-Flipper',

    },
    {
        id: 3,
        title: 'Order summary card',
        video: 'https://marlissonsilva.com.br/images/arte-video.mp4',
        desc: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore alias accusantium excepturi id nobis velit! Reiciendis obcaecati quos, distinctio unde enim expedita. At unde modi non cum obcaecati nulla dolorem?',
        techs: [
            '<i class="fa-brands fa-html5"></i>',
            ' <i class="fa-brands fa-css3-alt"></i>',
            '<i class="fa-brands fa-square-js"></i>'],
        projeto: 'https://marlissonsilva.github.io/sunnyside-agency-landing-page-main/',
        repositorio: 'https://github.com/marlissonsilva/sunnyside-agency-landing-page-main',
    },
    {
        id: 4,
        title: 'rest-countries-api-with-color-theme-switcher',
        video: 'https://marlissonsilva.com.br/images/arte-video.mp4',
        desc: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore alias accusantium excepturi id nobis velit! Reiciendis obcaecati quos, distinctio unde enim expedita. At unde modi non cum obcaecati nulla dolorem?',
        techs: [
            '<i class="fa-brands fa-html5"></i>',
            ' <i class="fa-brands fa-css3-alt"></i>',
            '<i class="fa-brands fa-square-js"></i>'],
        projeto: 'https://marlissonsilva.github.io/rest-countries-api-with-color-theme-switcher-master/',
        repositorio: 'https://github.com/marlissonsilva/rest-countries-api-with-color-theme-switcher-master',
    },
    {
        id: 5,
        title: 'rest countries API',
        video: 'https://marlissonsilva.com.br/images/arte-video.mp4',
        desc: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore alias accusantium excepturi id nobis velit! Reiciendis obcaecati quos, distinctio unde enim expedita. At unde modi non cum obcaecati nulla dolorem?',
        techs: [
            '<i class="fa-brands fa-html5"></i>',
            ' <i class="fa-brands fa-css3-alt"></i>',
            '<i class="fa-brands fa-square-js"></i>',
            '<span>API</span>'],
        projeto: 'https://marlissonsilva.github.io/imc/',
        repositorio: 'https://github.com/marlissonsilva/imc',
    }
    // {
]


const video = document.querySelector('#img-person');
const title = document.querySelector('#title');
const desc = document.getElementById('desc');
const techs = document.querySelector('#techs');
const projeto = document.querySelector('#site')
const repositorio = document.querySelector('#repositorio')
const cards = document.querySelectorAll('[data-index]');
const fade = document.querySelector('#fade');
const modal = document.querySelector('#modal');
const closeModal = document.querySelector('.close-button')
const withoutJs = document.querySelectorAll('.without-js')


withoutJs.forEach((element) => {
    element.style.display = 'none'
})

cards.forEach(card => {
    card.addEventListener('click', () => {
        fade.classList.toggle('active')
        modal.classList.toggle('active')
        document.body.style.overflow = 'hidden'
    });
});


[closeModal, fade].forEach((e) => {
    e.addEventListener('click', () => {
        fade.classList.toggle('active')
        modal.classList.toggle('active')
        document.body.style.overflow = 'visible'
        console.log('teste')
    })
})


cards.forEach(card => {
    card.addEventListener('click', () => {
        const index = card.getAttribute('data-index');
        showModal(index);
    });
});



function showModal(index) {
    const item = dataModal[index];
    video.src = item.video;
    title.textContent = item.title;
    desc.textContent = item.desc;
    techs.innerHTML = item.techs;
    projeto.href = item.projeto;
    repositorio.href = item.repositorio;
}
