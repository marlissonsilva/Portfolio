const dataModal = [
    {
        id: 1,
        title: 'hora do dia',
        img: 'https://github.com/marlissonsilva/images/blob/main/hora-do-dia.png?raw=true',
        desc: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore alias accusantium excepturi id nobis velit! Reiciendis obcaecati quos, distinctio unde enim expedita. At unde modi non cum obcaecati nulla dolorem?',
        techs: 'html, css, js',
        projeto: 'https://marlissonsilva.github.io/hora-do-dia/',
        repositorio: 'https://github.com/marlissonsilva/hora-do-dia',
    },
    {
        id: 2,
        title: 'arte e sorriso',
        img: './images/arte-video.mp4',
        desc: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore alias accusantium excepturi id nobis velit! Reiciendis obcaecati quos, distinctio unde enim expedita. At unde modi non cum obcaecati nulla dolorem?',
        techs: 'html, css, js',
        projeto: 'https://marlissonsilva.github.io/arte-sorriso/',
        repositorio: 'https://github.com/marlissonsilva/arte-sorriso',
    },
    {
        id: 3,
        title: 'Collor Flipper',
        img: 'https://github.com/marlissonsilva/images/blob/main/collor-flipper.png?raw=true',
        desc: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore alias accusantium excepturi id nobis velit! Reiciendis obcaecati quos, distinctio unde enim expedita. At unde modi non cum obcaecati nulla dolorem?',
        techs: 'html, css, js',
        projeto: 'https://marlissonsilva.github.io/Collor-Flipper/hex.html',
        repositorio: 'https://github.com/marlissonsilva/Collor-Flipper',

    },
    {
        id: 4,
        title: 'Order summary card',
        img: 'https://github.com/marlissonsilva/images/blob/main/oder-summary-card.png?raw=true',
        desc: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore alias accusantium excepturi id nobis velit! Reiciendis obcaecati quos, distinctio unde enim expedita. At unde modi non cum obcaecati nulla dolorem?',
        techs: 'html, css, js',
        projeto: 'https://marlissonsilva.github.io/sunnyside-agency-landing-page-main/',
        repositorio: 'https://github.com/marlissonsilva/sunnyside-agency-landing-page-main',
    },
    {
        id: 5,
        title: 'rest-countries-api-with-color-theme-switcher',
        img: 'https://github.com/marlissonsilva/rest-countries-api-with-color-theme-switcher-master/blob/main/img/preview-project.png?raw=true',
        desc: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore alias accusantium excepturi id nobis velit! Reiciendis obcaecati quos, distinctio unde enim expedita. At unde modi non cum obcaecati nulla dolorem?',
        techs: 'html, css, js, api',
        projeto: 'https://marlissonsilva.github.io/rest-countries-api-with-color-theme-switcher-master/',
        repositorio: 'https://github.com/marlissonsilva/rest-countries-api-with-color-theme-switcher-master',
    },
    {
        id: 6,
        title: 'IMC',
        img: 'https://github.com/marlissonsilva/images/blob/main/imc.png?raw=true',
        desc: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore alias accusantium excepturi id nobis velit! Reiciendis obcaecati quos, distinctio unde enim expedita. At unde modi non cum obcaecati nulla dolorem?',
        techs: 'html, css, js',
        projeto: 'https://marlissonsilva.github.io/imc/',
        repositorio: 'https://github.com/marlissonsilva/imc',
    }
    // {
]


const img = document.querySelector('#img-person');
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
        // console.log(`${index}`);
        // console.log(dataModal[index])
        showModal(index);
    });
});



function showModal(index) {
    const item = dataModal[index]
    console.log('id ' + item.id)
    img.src = item.img;
    title.textContent = item.title;
    desc.textContent = item.desc;
    techs.textContent = item.techs;
    projeto.href = item.projeto;
    repositorio.href = item.repositorio;
}