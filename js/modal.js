const dataModal = [
  {
    id: 0,
    title: "página de captura",
    image: "../images/page-capute-mockup.webp",
    description: [
      "Página de cadastro para receber conteúdos sobre programação, com os inputs de nome, email e com as opções de estados, foi feito a validação dos campos de input, a validação de email por meio de uma expressão regular, mostra mensagem de preenchimento incorreto e por fim abre um modal retornando a confirmação do cadastro com os dados inseridos pelo usuário.",
    ],
    techs: [
      '<i class="fa-brands fa-html5"></i>',
      '<i class="fa-brands fa-css3-alt"></i>',
      '<i class="fa-brands fa-square-js"></i>',
    ],
    project: "https://marlissonsilva.github.io/capture-page/",
    repository: "https://github.com/marlissonsilva/capture-page",
  },
  {
    id: 1,
    title: "Quiz",
    image: "../images/quiz.png",
    description: [
      "É um quiz sobre os times de futebol brasilero, para testar seus conhecimentos sobre o nosso futebol. Onde o usuário tem 10 questões com 4 alternativas de respostas para cada. E ao fim do questionário após o envio vem a animação de scroll até o topo para visualização da pontuação, tendo uma animação a mais quando é obtido a pontuação máxima.",
    ],
    techs: [
      '<i class="fa-brands fa-html5"></i>',
      '<i class="fa-brands fa-square-js"></i>',
      '<i class="fa-brands fa-bootstrap"></i>',
    ],
    project: "https://marlissonsilva.github.io/Quiz/",
    repository: "https://github.com/marlissonsilva/Quiz",
  },

  {
    id: 2,
    title: "Consumindo API do GIFHY",
    image: "../images/gifhy.png",
    description: [
      "Aplicação feita como desafio do curso de javascript, onde é feito o consumo da API GIFHY, retornando um GIF corespondente ao termo digitado no input",
    ],
    techs: [
      '<i class="fa-brands fa-html5"></i>',
      '<i class="fa-brands fa-css3-alt"></i>',
      '<i class="fa-brands fa-square-js"></i>',
    ],
    project: "https://fetch-api-gifhy.netlify.app/",
    repository: "https://github.com/marlissonsilva/fetch-gif-in-gifhy-api",
  },
  {
    id: 3,
    title: "arte & sorriso",
    image: "../images/mockup-arte1.webp",
    description: [
      "Site feito para uma clínica ondontologica (fictício), na verdade foi feito baseado em uma clinica na qual ja frequentei, é um site simples de apresentação de todas as especialidades e seus profissionais. As principais funções do site são:,Contar um pouco sobre a clínica,Mostar os planos conveniados,Cards com as especialidades, e um modal com mais informações de cada especialidade,Cards com apresentando os dentistas,Seção de comentários dos clientes.,Localização,Links para redes sociais",
    ],
    techs: [
      '<i class="fa-brands fa-html5"></i>',
      '<i class="fa-brands fa-css3-alt"></i>',
      '<i class="fa-brands fa-square-js"></i>',
    ],
    project: "https://marlissonsilva.github.io/arte-sorriso/",
    repository: "https://github.com/marlissonsilva/arte-sorriso",
  },
];

const image = document.querySelector(".image");
const title = document.querySelector(".title");
const desc = document.querySelector(".desc");
const techs = document.querySelector(".technologies-used");
const projeto = document.querySelector(".site");
const repositorio = document.querySelector(".repositorio");
const cardsIndex = document.querySelectorAll("[data-index]");
const wrappers = document.querySelectorAll(".wrapper-card");
const containerCards = document.querySelector(".projects");
const fade = document.querySelector(".fade");
const modal = document.querySelector(".modal");
const paragraph = document.createElement("p");
paragraph.textContent = "Clique nos cards para ver mais informações";
paragraph.classList.add("paragraphAuxiliar");

wrappers.forEach((wrapper) => {
  wrapper.style.display = "none";
});

const changeOverflowBody = () => {
  document.body.classList.toggle("hidden");
};

const openModal = (event) => {
  if (event.target.tagName === "IMG") {
    toggleModal();
    changeOverflowBody();
    const index = event.target.getAttribute("data-index");
    showModal(index);
  }
};

const toggleModal = () => {
  fade.classList.toggle("active");
  modal.classList.toggle("active");
};

const closeModal = (event) => {
  classNameOfClickedElement = event.target.classList[0];
  const classNames = ["close-button", "fade"];
  const shouldCloseModal = classNames.some(
    (className) => className === classNameOfClickedElement
  );
  if (shouldCloseModal) {
    fade.classList.toggle("active");
    modal.classList.toggle("active");
    changeOverflowBody();
  }
};

const showModal = (index) => {
  const item = dataModal[index];
  image.src = item.image;
  title.textContent = item.title;
  desc.innerHTML = item.description;
  techs.innerHTML = item.techs.join(" ");
  projeto.href = item.project;
  repositorio.href = item.repository;

  image.setAttribute("alt", item.title);
  console.log(image);
};

containerCards.children[0].insertAdjacentElement("afterend", paragraph);

containerCards.addEventListener("click", openModal);
document.body.addEventListener("click", closeModal);
