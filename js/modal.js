const dataModal = [
    {

        title: 'hora do dia',
        img: 'https://github.com/marlissonsilva/images/blob/main/hora-do-dia.png?raw=true',
        desc: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore alias accusantium excepturi id nobis velit! Reiciendis obcaecati quos, distinctio unde enim expedita. At unde modi non cum obcaecati nulla dolorem?',
        techs: 'html, css, js',
        projeto: 'https://marlissonsilva.github.io/hora-do-dia/',
        repositorio: 'https://github.com/marlissonsilva/hora-do-dia',
    },
    {

        title: 'arte e sorriso',
        img: 'https://github.com/marlissonsilva/images/blob/main/arte-sorriso.png?raw=true',
        desc: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore alias accusantium excepturi id nobis velit! Reiciendis obcaecati quos, distinctio unde enim expedita. At unde modi non cum obcaecati nulla dolorem?',
        techs: 'html, css, js',
        projeto: 'https://marlissonsilva.github.io/arte-sorriso/',
        repositorio: 'https://github.com/marlissonsilva/arte-sorriso',
    },
    {

        title: 'Collor Flipper',
        img: 'https://github.com/marlissonsilva/images/blob/main/collor-flipper.png?raw=true',
        desc: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore alias accusantium excepturi id nobis velit! Reiciendis obcaecati quos, distinctio unde enim expedita. At unde modi non cum obcaecati nulla dolorem?',
        techs: 'html, css, js',
        projeto: 'https://marlissonsilva.github.io/Collor-Flipper/hex.html',
        repositorio: 'https://github.com/marlissonsilva/Collor-Flipper',

    },
    {

        title: 'Order summary card',
        img: 'https://github.com/marlissonsilva/images/blob/main/oder-summary-card.png?raw=true',
        desc: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore alias accusantium excepturi id nobis velit! Reiciendis obcaecati quos, distinctio unde enim expedita. At unde modi non cum obcaecati nulla dolorem?',
        techs: 'html, css, js',
        projeto: 'https://marlissonsilva.github.io/order-summary-component/',
        repositorio: 'https://github.com/marlissonsilva/order-summary-component',
    },
    {

        title: 'column preview card component',
        img: 'https://github.com/marlissonsilva/images/blob/main/column-preview-card.png?raw=true',
        desc: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore alias accusantium excepturi id nobis velit! Reiciendis obcaecati quos, distinctio unde enim expedita. At unde modi non cum obcaecati nulla dolorem?',
        techs: 'html, css, js',
        projeto: 'https://marlissonsilva.github.io/3column-preview-card-component-main/',
        repositorio: 'https://github.com/marlissonsilva/3column-preview-card-component-main',
    },
    {

        title: 'IMC',
        img: 'https://github.com/marlissonsilva/images/blob/main/imc.png?raw=true',
        desc: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore alias accusantium excepturi id nobis velit! Reiciendis obcaecati quos, distinctio unde enim expedita. At unde modi non cum obcaecati nulla dolorem?',
        techs: 'html, css, js',
        projeto: 'https://marlissonsilva.github.io/imc/',
        repositorio: 'https://github.com/marlissonsilva/imc',
    }
    // {

    //     title: 'cards car preview 7',
    //     img: 'https://github.com/marlissonsilva/portfolio/blob/main/images/Captura%20de%20tela%202022-12-01%20080231.png?raw=true',
    //     desc: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore alias accusantium excepturi id nobis velit! Reiciendis obcaecati quos, distinctio unde enim expedita. At unde modi non cum obcaecati nulla dolorem?',
    //     techs: 'html, css, js',
    //     projeto: 'https://marlissonsilva.github.io/hora-do-dia/',
    //     repositorio: 'https://github.com/marlissonsilva/hora-do-dia',

    // },
    //     {

    //         title: 'Card Order Sumary 8',
    //         img: 'https://github.com/marlissonsilva/portfolio/blob/main/images/Captura%20de%20tela%202022-12-05%20072353.png?raw=true',
    //         desc: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore alias accusantium excepturi id nobis velit! Reiciendis obcaecati quos, distinctio unde enim expedita. At unde modi non cum obcaecati nulla dolorem?',
    //         techs: 'html, css, js',
    //         projeto: 'https://marlissonsilva.github.io/hora-do-dia/',
    //         repositorio: 'https://github.com/marlissonsilva/hora-do-dia',
    //     }
    //     ,
    //     {

    //         title: 'Card Order Sumary 9',
    //         img: 'https://github.com/marlissonsilva/portfolio/blob/main/images/Captura%20de%20tela%202022-12-01%20080231.png?raw=true',
    //         desc: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore alias accusantium excepturi id nobis velit! Reiciendis obcaecati quos, distinctio unde enim expedita. At unde modi non cum obcaecati nulla dolorem?',
    //         techs: 'html, css, js',
    //         projeto: 'https://marlissonsilva.github.io/hora-do-dia/',
    //         repositorio: 'https://github.com/marlissonsilva/hora-do-dia',
    //     }
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
        console.log(`${index}`);
        console.log(dataModal[index])
        showModal(index);
    });
});



function showModal(index) {
    const item = dataModal[index]
    img.src = item.img;
    title.textContent = item.title;
    desc.textContent = item.desc;
    techs.textContent = item.techs;
    projeto.href = item.projeto;
    repositorio.href = item.repositorio;
}