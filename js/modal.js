const dataModal = [
    {
        id: 0,
        title: 'Collor Flipper',
        video: '../images/color-flipper-video.mp4',
        desc: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore alias accusantium excepturi id nobis velit! Reiciendis obcaecati quos, distinctio unde enim expedita. At unde modi non cum obcaecati nulla dolorem?',
        techs: [
            '<i class="fa-brands fa-html5"></i>',
            ' <i class="fa-brands fa-css3-alt"></i>',
            '<i class="fa-brands fa-square-js"></i>'],
        projeto: 'https://marlissonsilva.github.io/Collor-Flipper/hex.html',
        repositorio: 'https://github.com/marlissonsilva/Collor-Flipper',

    }, {
        id: 1,
        title: 'página de captura',
        video: '../images/pagina-captura-video.mp4',
        desc: 'Página de cadastro para receber conteúdos sobre programação, com os inputs de nome, email e com as opções de estados, foi feito a validação dos campos de input, a validação de email por meio de uma expressão regular, mostra mensagem de preenchimento incorreto e por fim abre um modal retornando a confirmação do cadastro com os dados inseridos pelo usuário. ',
        techs: [
            '<i class="fa-brands fa-html5"></i>',
            ' <i class="fa-brands fa-css3-alt"></i>',
            '<i class="fa-brands fa-square-js"></i>'],
        projeto: 'https://marlissonsilva.github.io/capture-page/',
        repositorio: 'https://github.com/marlissonsilva/capture-page',
    }, {
        id: 2,
        title: 'sunnyside-agency',
        video: '../images/sunnyside-video.mp4',
        desc: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore alias accusantium excepturi id nobis velit! Reiciendis obcaecati quos, distinctio unde enim expedita. At unde modi non cum obcaecati nulla dolorem?',
        techs: [
            '<i class="fa-brands fa-html5"></i>',
            ' <i class="fa-brands fa-css3-alt"></i>',
            '<i class="fa-brands fa-square-js"></i>'],
        projeto: 'https://marlissonsilva.github.io/sunnyside-agency-landing-page-main/',
        repositorio: 'https://github.com/marlissonsilva/sunnyside-agency-landing-page-main',
    },

    {
        id: 3,
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
        id: 4,
        title: 'escola weda',
        video: '../images/weda-video.mp4',
        desc: 'Trata-se de um site de uma academia de lutas, onde apresenta todas as modalidades ofertadas, localização, rede social, e links para entrar em contato via WhatsApp e conta tambem com um carrossel com imagens referentes as modalidades, professores e a estrutura da academia. Esse é um site que está rodando na web, foi feito para um amigo. ',
        techs: [
            '<i class="fa-brands fa-html5"></i>',
            ' <i class="fa-brands fa-css3-alt"></i>',
            '<i class="fa-brands fa-square-js"></i>'],
        projeto: 'https://demonstracao-weda.netlify.app/',
        repositorio: 'https://github.com/marlissonsilva',
    },
    {
        id: 5,
        title: 'rest countries API',
        video: '../images/rest-countries.mp4',
        desc: '',
        techs: [
            '<i class="fa-brands fa-html5"></i>',
            ' <i class="fa-brands fa-css3-alt"></i>',
            '<i class="fa-brands fa-square-js"></i>',
            '<i class="fa-brands">API</i>'],
        projeto: 'https://marlissonsilva.github.io/rest-countries-api-with-color-theme-switcher-master/',
        repositorio: 'https://github.com/marlissonsilva/rest-countries-api-with-color-theme-switcher-master',

    }
    // {
]


const video = document.querySelector('#img-person');
const title = document.querySelector('#title');
const desc = document.getElementById('desc');
const techs = document.querySelector('#techs');
const projeto = document.querySelector('#site')
const repositorio = document.querySelector('#repositorio')
const cardsIndex = document.querySelectorAll('[data-index]');
const fade = document.querySelector('#fade');
const modal = document.querySelector('#modal');
const closeModal = document.querySelector('.close-button')
const withoutJs = document.querySelectorAll('.without-js')


withoutJs.forEach((element) => {
    element.style.display = 'none'
})

cardsIndex.forEach(card => {
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
    })
})


cardsIndex.forEach(card => {
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
    techs.innerHTML = item.techs.join('');
    projeto.href = item.projeto;
    repositorio.href = item.repositorio;
}
