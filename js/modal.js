const dataModal = [
  {
    id: 1,
    title: "página de captura",
    image: "../images/weda-mockup.webp",
    description: [
      "Página de cadastro para receber conteúdos sobre programação, com os inputs de nome, email e com as opções de estados, foi feito a validação dos campos de input, a validação de email por meio de uma expressão regular, mostra mensagem de preenchimento incorreto e por fim abre um modal retornando a confirmação do cadastro com os dados inseridos pelo usuário.",
    ],
    techs: [
      'fa-brands fa-html5"',
      'fa-brands fa-css3-alt"',
      'fa-brands fa-square-js"',
    ],
    project: "https://marlissonsilva.github.io/capture-page/",
    repository: "https://github.com/marlissonsilva/capture-page",
  },
  {
    id: 2,
    title: "sunnyside-agency",
    image: "../images/sunnyside-mockup.webp",
    description: [
      "    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore alias accusantium excepturi id nobis velit! Reiciendis obcaecati quos, distinctio unde enim expedita. At unde modi non cum obcaecati nulla dolorem?",
    ],
    techs: [
      'fa-brands fa-html5"',
      'fa-brands fa-css3-alt"',
      'fa-brands fa-square-js"',
    ],
    project:
      "https://marlissonsilva.github.io/sunnyside-agency-landing-page-main/",
    repository:
      "https://github.com/marlissonsilva/sunnyside-agency-landing-page-main",
  },

  {
    id: 3,
    title: "arte e sorriso",
    image: "./images/weda-mockup.webp",
    description: [
      "Site feito para uma clínica ondontologica (fictício), na verdade foi feito baseado em uma clinica na qual ja frequentei, é um site simples de apresentação de todas as especialidades e seus profissionais. As principais funções do site são:",
      "Contar um pouco sobre a clínica",
      "Mostar os planos conveniados",
      "Cards com as especialidades, e um modal com mais informações de cada especialidade",
      "Cards com apresentando os dentistas",
      "Seção de comentários dos clientes.",
      "Localização",
      "Links para redes sociais",
    ],
    techs: [
      'fa-brands fa-html5"',
      'fa-brands fa-css3-alt"',
      'fa-brands fa-square-js"',
    ],
    project: "https://marlissonsilva.github.io/arte-sorriso/",
    repository: "https://github.com/marlissonsilva/arte-sorriso",
  },
  {
    id: 4,
    title: "escola weda",
    image: "../images/sunnyside-mockup.webp",
    description: [
      "Site de uma academia de lutas, primeiro projeto que foi ao ar na web, foi feito para um amigo. possui tais funcionalidaes como: ",

      "Apresentar a academia",
      "Mostar as modalidades disponiveis",
      "Botão de contato de acordo com cada modalidade, já com uma mensagem pré-definida para o WhatsApp",
      "Localização ",
      "Carrossel de imagens das dependencias da academia, seus alunos e professores",
      "Link de direcionamento para a rede social",
    ],
    techs: [
      'fa-brands fa-html5"',
      'fa-brands fa-css3-alt"',
      'fa-brands fa-square-js"',
    ],
    project: "https://preview-weda.netlify.app/",
    repository: "https://github.com/marlissonsilva",
  },
];

const image = document.querySelector("#img-person");
const title = document.querySelector("#title");
const description = document.getElementById("descripition");
const techs = document.querySelector("#techs");
const projeto = document.querySelector("#site");
const repositorio = document.querySelector("#repositorio");
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

console.log(containerCards);
containerCards.children[0].insertAdjacentElement("afterend", paragraph);

const openModal = (event) => {
  if (event.target.tagName === "IMG") {
    toggleModal();
    document.body.style.overflow = "hidden";
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
    document.body.style.overflow = "visible";
  }
};

const showModal = (index) => {
  const item = dataModal[index];
  image.src = item.image;
  title.textContent = item.title;
  desc.innerHTML = item.description;
  techs.innerHTML = `<i class="${item.techs}"></i>`;
  projeto.href = item.project;
  repositorio.href = item.repository;
};

containerCards.addEventListener("click", openModal);
document.body.addEventListener("click", closeModal);
