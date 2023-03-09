const dataModal = [
    {
        //  PROJETO 1    
        id: 0,
        title: 'Collor Flipper',
        video: '../images/color-flipper-video.mp4',
        desc: ['Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore alias accusantium excepturi id nobis velit! Reiciendis obcaecati quos, distinctio unde enim expedita. At unde modi non cum obcaecati nulla dolorem?'],
        techs: [
            '<i class="fa-brands fa-html5"></i>',
            ' <i class="fa-brands fa-css3-alt"></i>',
            '<i class="fa-brands fa-square-js"></i>'],
        projeto: 'https://marlissonsilva.github.io/Collor-Flipper/hex.html',
        repositorio: 'https://github.com/marlissonsilva/Collor-Flipper',

    },
    {
        // PROJETO 2
        id: 1,
        title: 'página de captura',
        video: '../images/pagina-captura-video.mp4',
        desc: ['Página de cadastro para receber conteúdos sobre programação, com os inputs de nome, email e com as opções de estados, foi feito a validação dos campos de input, a validação de email por meio de uma expressão regular, mostra mensagem de preenchimento incorreto e por fim abre um modal retornando a confirmação do cadastro com os dados inseridos pelo usuário.'],
        techs: [
            '<i class="fa-brands fa-html5"></i>',
            ' <i class="fa-brands fa-css3-alt"></i>',
            '<i class="fa-brands fa-square-js"></i>'],
        projeto: 'https://marlissonsilva.github.io/capture-page/',
        repositorio: 'https://github.com/marlissonsilva/capture-page',
    },
    {
        // PROJETO 3
        id: 2,
        title: 'sunnyside-agency',
        video: '../images/sunnyside-video.mp4',
        desc: ['    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore alias accusantium excepturi id nobis velit! Reiciendis obcaecati quos, distinctio unde enim expedita. At unde modi non cum obcaecati nulla dolorem?'],
        techs: [
            '<i class="fa-brands fa-html5"></i>',
            ' <i class="fa-brands fa-css3-alt"></i>',
            '<i class="fa-brands fa-square-js"></i>'],
        projeto: 'https://marlissonsilva.github.io/sunnyside-agency-landing-page-main/',
        repositorio: 'https://github.com/marlissonsilva/sunnyside-agency-landing-page-main',
    },

    {
        // PROJETO 4
        id: 3,
        title: 'arte e sorriso',
        video: './images/arte-video.mp4',
        desc: ['Site feito para uma clínica ondontologica (fictício), na verdade foi feito baseado em uma clinica na qual ja frequentei, é um site simples de apresentação de todas as especialidades e seus profissionais. As principais funções do site são:',

            '<li>Contar um pouco sobre a clínica</li>',
            '<li>Mostar os planos conveniados</li>',
            '<li>Cards com as especialidades, e um modal com mais informações de cada especialidade</li>',
            '<li>Cards com apresentando os dentistas</li>',
            '<li>Seção de comentários dos clientes.</li>',
            '<li>Localização</li>',
            '<li>Links para redes sociais'],
        techs: [
            '<i class="fa-brands fa-html5"></i>',
            ' <i class="fa-brands fa-css3-alt"></i>',
            '<i class="fa-brands fa-square-js"></i>'],
        projeto: 'https://marlissonsilva.github.io/arte-sorriso/',
        repositorio: 'https://github.com/marlissonsilva/arte-sorriso',
    },
    {
        // PROJETO 5
        id: 4,
        title: 'escola weda',
        video: '../images/weda-video.mp4',
        desc: ['Site de uma academia de lutas, primeiro projeto que foi ao ar na web, foi feito para um amigo. possui tais funcionalidaes como: ',

            '<li>Apresentar a academia</li>',
            '<li>Mostar as modalidades disponiveis</li>',
            '<li>Botão de contato de acordo com cada modalidade, já com uma mensagem pré-definida para o WhatsApp</li>',
            '<li>Localização </li>',
            '<li>Carrossel de imagens das dependencias da academia, seus alunos e professores</li>',
            '<li>Link de direcionamento para a rede social</li>'],
        techs: [
            '<i class="fa-brands fa-html5"></i>',
            ' <i class="fa-brands fa-css3-alt"></i>',
            '<i class="fa-brands fa-square-js"></i>'],
        projeto: 'https://demonstracao-weda.netlify.app/',
        repositorio: 'https://github.com/marlissonsilva',
    },
    {
        // PROJETO 6
        id: 5,
        title: 'rest countries API',
        video: '../images/rest-countries.mp4',
        desc: ['<p>Projeto feito como desafio do Frontend Mentor, onde foi proposto fazer o consumo da REST Countries API (API de países) onde os usuarios seriam capazes de acessar certas funcionalidaes , como: </p>',

            '<li>Ver todos os países da API na página inicial</li>',
            '<li>Pesquisar um país usando um campo de input</li>',
            '<li>Filtrar países por região</li>',
            '<li>Clicar em um país para ver informações mais detalhadas em uma página separada(Em desenvolvimento)</li>',
            '<li>Clicar nos países fronteiriços na página de detalhes(Em desenvolvimento)</li>',
            '<li>Alternar o esquema de cores entre o modo claro e escuro(Em desenvolvimento)</li>'],

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
    desc.innerHTML = item.desc.join('');
    techs.innerHTML = item.techs.join('');
    projeto.href = item.projeto;
    repositorio.href = item.repositorio;
}
