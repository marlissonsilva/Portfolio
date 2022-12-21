const dataModal = [
    {

        title: 'Order Sumary 1',
        img: 'https://img.freepik.com/fotos-gratis/professor-sorridente-segurando-um-monte-de-livros-e-uma-maca-com--de-copia_23-2148668527.jpg?w=900&t=st=1667474703~exp=1667475303~hmac=dfd5883afc5725211ff76b5edfb96f52dfda9442486ef2ea8858b12def7560d6',
        desc: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore alias accusantium excepturi id nobis velit! Reiciendis obcaecati quos, distinctio unde enim expedita. At unde modi non cum obcaecati nulla dolorem?',
        techs: 'html, css, js',
        projeto: 'https://marlissonsilva.github.io/hora-do-dia/',
        repositorio: 'https://github.com/marlissonsilva/hora-do-dia'
    },
    {

        title: 'Cards car 2',
        img: 'https://img.freepik.com/fotos-gratis/garoto-segurando-uma-maca-na-sala-de-aula_1150-3835.jpg?t=st=1667445614~exp=1667446214~hmac=17db5282ab1d79711c47712814099358a038eca632c9167864ebadfbbed286c2',
        desc: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore alias accusantium excepturi id nobis velit! Reiciendis obcaecati quos, distinctio unde enim expedita. At unde modi non cum obcaecati nulla dolorem?',
        techs: 'html, css, js',
        projeto: 'https://marlissonsilva.github.io/hora-do-dia/',
        repositorio: 'https://github.com/marlissonsilva/hora-do-dia'
    },
    {

        title: 'cards car preview 3',
        img: 'https://github.com/marlissonsilva/portfolio/blob/main/images/Captura%20de%20tela%202022-12-01%20080231.png?raw=true',
        desc: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore alias accusantium excepturi id nobis velit! Reiciendis obcaecati quos, distinctio unde enim expedita. At unde modi non cum obcaecati nulla dolorem?',
        techs: 'html, css, js',
        projeto: 'https://marlissonsilva.github.io/hora-do-dia/',
        repositorio: 'https://github.com/marlissonsilva/hora-do-dia'

    },
    {

        title: 'Card Order Sumary 4',
        img: 'https://github.com/marlissonsilva/portfolio/blob/main/images/Captura%20de%20tela%202022-12-05%20072353.png?raw=true',
        desc: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore alias accusantium excepturi id nobis velit! Reiciendis obcaecati quos, distinctio unde enim expedita. At unde modi non cum obcaecati nulla dolorem?',
        techs: 'html, css, js',
        projeto: 'https://marlissonsilva.github.io/hora-do-dia/',
        repositorio: 'https://github.com/marlissonsilva/hora-do-dia'
    },
    {

        title: 'Order Sumary 5',
        img: 'https://img.freepik.com/fotos-gratis/professor-sorridente-segurando-um-monte-de-livros-e-uma-maca-com--de-copia_23-2148668527.jpg?w=900&t=st=1667474703~exp=1667475303~hmac=dfd5883afc5725211ff76b5edfb96f52dfda9442486ef2ea8858b12def7560d6',
        desc: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore alias accusantium excepturi id nobis velit! Reiciendis obcaecati quos, distinctio unde enim expedita. At unde modi non cum obcaecati nulla dolorem?',
        techs: 'html, css, js',
        projeto: 'https://marlissonsilva.github.io/hora-do-dia/',
        repositorio: 'https://github.com/marlissonsilva/hora-do-dia'
    },
    {

        title: 'Cards car 6',
        img: 'https://img.freepik.com/fotos-gratis/garoto-segurando-uma-maca-na-sala-de-aula_1150-3835.jpg?t=st=1667445614~exp=1667446214~hmac=17db5282ab1d79711c47712814099358a038eca632c9167864ebadfbbed286c2',
        desc: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore alias accusantium excepturi id nobis velit! Reiciendis obcaecati quos, distinctio unde enim expedita. At unde modi non cum obcaecati nulla dolorem?',
        techs: 'html, css, js',
        projeto: 'https://marlissonsilva.github.io/hora-do-dia/',
        repositorio: 'https://github.com/marlissonsilva/hora-do-dia'
    },
    {

        title: 'cards car preview 7',
        img: 'https://github.com/marlissonsilva/portfolio/blob/main/images/Captura%20de%20tela%202022-12-01%20080231.png?raw=true',
        desc: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore alias accusantium excepturi id nobis velit! Reiciendis obcaecati quos, distinctio unde enim expedita. At unde modi non cum obcaecati nulla dolorem?',
        techs: 'html, css, js',
        projeto: 'https://marlissonsilva.github.io/hora-do-dia/',
        repositorio: 'https://github.com/marlissonsilva/hora-do-dia'

    },
    {

        title: 'Card Order Sumary 8',
        img: 'https://github.com/marlissonsilva/portfolio/blob/main/images/Captura%20de%20tela%202022-12-05%20072353.png?raw=true',
        desc: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore alias accusantium excepturi id nobis velit! Reiciendis obcaecati quos, distinctio unde enim expedita. At unde modi non cum obcaecati nulla dolorem?',
        techs: 'html, css, js',
        projeto: 'https://marlissonsilva.github.io/hora-do-dia/',
        repositorio: 'https://github.com/marlissonsilva/hora-do-dia'
    }
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