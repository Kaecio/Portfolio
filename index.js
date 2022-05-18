const langEl = document.querySelector('.lang-menu');
const link = document.querySelectorAll('a');
const titleEl = document.querySelector('.title');
const subtitle = document.querySelector('.subtitle');
const description = document.querySelector('.description');
const btnAboutMe = document.querySelector('.btnAboutMe');
const titleContext = document.querySelector('.title-contex');
const titleServices = document.querySelector('.title-services');
const paragraphServices = document.querySelector('.paragraph-services');
const titleWork = document.querySelector('.title-work');
const paragraphWork = document.querySelector('.paragraph-work');
const btnViewMore = document.querySelector('.btnViewMore');
const titleContact = document.querySelector('.title-contact');
const paragrapContat = document.querySelector('.paragrapContat');
const curriculum = document.querySelector('.curriculum');


curriculum.addEventListener('mouseover', () => {
  const teste = document.createElement('div');
  teste.classList = 'msgCurriculum textoTeste';
  teste.style.display = 'block';
  teste.innerHTML = 'maintenance - 404';
  //teste.innerHTML = 'Download';
  curriculum.appendChild(teste)
  curriculum.addEventListener('mouseout', () => {
    teste.style.display = 'none';
  })
})

const letterMachine = (el) => {
  const text = el.innerHTML.split('');
  el.innerHTML = ''
  text.forEach((letra, index) => {
    setTimeout(() => {
      el.innerHTML += letra
    }, 80 * index);
  })
}

setInterval(() => letterMachine(subtitle), 6000);

window.addEventListener('scroll', () => {
  const nav = document.querySelector('nav');
  nav.classList.toggle('sticky', window.scrollY > 0)

})

const toggleMenu = () => {
  const menuToggle = document.querySelector('.toggle');
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
  menuToggle.classList.toggle('active');
}

const br = document.createElement('br');
const texto = document.createTextNode("Fanderson Kaecio")
const span = document.createElement('span')

link.forEach(el => {
  el.addEventListener('click', () => {
    subtitle.textContent = ''
    clearInterval(setInterval(() => letterMachine(subtitle)))

    span.appendChild(texto)
    br.appendChild(span);
    document.querySelector('.title').appendChild(br)

    const attr = el.getAttribute('language');
    titleEl.textContent = data[attr].title;
    subtitle.textContent = data[attr].subTitle;
    btnAboutMe.textContent = data[attr].btnAboutMe;
    titleContext.textContent = data[attr].titleContext;
    description.textContent = data[attr].description;
    titleServices.textContent = data[attr].titleServices;
    paragraphServices.textContent = data[attr].paragraphServices;
    titleWork.textContent = data[attr].titleWork;
    paragraphWork.textContent = data[attr].paragraphWork;
    btnViewMore.textContent = data[attr].btnViewMore;
    titleContact.textContent = data[attr].titleContact;
    paragrapContat.textContent = data[attr].paragrapContat;

  })
})

setInterval(() => letterMachine(subtitle), 6000);

const data = {
  "english": {
    "title": "Hello, I'm",
    "subTitle": "Quality Assurance at Accenture",
    "btnAboutMe": "About Me",
    "titleContext": "I am Quality Assurance at Accenture.",
    "description": `I am 37 years old, two beautiful children and a family that I love.
    I've been passionate about technology ever since.
    I have a degree in Systems Analysis and Development from Universidade Nove de Julho – 2014.
    I started my career as Quality Assurance at Concrete Solutions in 2021. Today, I am a consultant at the largest bank in Latin America and I work in the credit card sector. I learn a lot from the partner and I still continue, working something that involves numbers, figures and customers is very challenging, but, above all, a great experience for me.
    I love to question, follow the projects from their planning, in their construction, in the delivery and of course, in their life cycle always doing tests like black box testing, white box testing, end to end, from regression, automated tests between others.
    In January 2022, Concrete had its definitive merger with Accenture do Brasil.
    Today, I am part of Accenture as a Quality Assurance, but I continue to perform the same activity as before.
    I do my projects and my work, I do it with a lot of love.`,
    "titleServices": "Main Tecnologys used.",
    "paragraphServices": "Technologies used in my daily life.",
    "btnViewMore": "VIEW MORE",
    "titleWork": "Projects",
    "paragraphWork": "Some projects developed",
    "titleContact": "Contact us",
    "paragrapContat": "For more informations",
  },
  "brazilian": {
    "title": "Olá, Eu sou",
    "subTitle": "Quality Assurance na Accenture",
    "btnAboutMe": "Sobre mim",
    "titleContext": "Eu sou Quality Assurance na Accenture",
    "description": `Tenho 37 anos, dois filhos lindos e uma família quem eu amo.
    Sou apaixonado por tecnologia desde sempre.
    Sou formado em Análise e Desenvolvimento de Sistemas pela Universidade Nove de Julho – 2014.  
    Comecei a minha carreira como Quality Assurance na Concrete Solutions em 2021. Hoje, sou consultor no maior banco da América Latina e atuo na parte de cartões de créditos. Aprendo muito no parceiro e ainda continuo, trabalhar algo que envolve números, cifras e clientes é muito desafiador, mas, acima de tudo, uma grande experiência para mim.
    Adoro questionar, acompanhar os projetos desde o seu planejamento, na sua construção, na entrega e claro, no seu ciclo de vida sempre fazendo testes como teste de caixa preta, teste de caixa branca, end to end, deste de regressão, testes automatizados entre outros.
    Em janeiro de 2022 a Concrete teve a sua junção definitiva com a Accenture do Brasil.
    Hoje, faço parte da Accenture como Quality Assurance, mas, continuo realizando a mesma atividade que fazia antes.
    Eu faço os meus projetos e o meu trabalho, eu faço com muito amor.`,
    "titleServices": "Principais tecnologias usadas.",
    "paragraphServices": "Tecnologias utilizadas no meu dia a dia.",
    "btnViewMore": "VEJA MAIS",
    "titleWork": "Projetos",
    "paragraphWork": "Alguns projetos desenvolvidos",
    "titleContact": "Contate nos",
    "paragrapContat": "Para mais informações",
  },
  "french": {
    "title": "Salut, Je m'appelle",
    "subTitle": "Je suis Quality Assurance chez Accenture",
    "btnAboutMe": "À propos de moi",
    "titleContext": "Je suis Quality Assurance chez Accenture",
    "description": `J'ai 37 ans, deux beaux enfants et une famille que j'aime.
    Depuis, je suis passionné par la technologie.
    J'ai un diplôme en analyse et développement de systèmes de l'Université Nove de Julho - 2014.
    J'ai commencé ma carrière en tant qu'assurance qualité chez Concrete Solutions en 2021. Aujourd'hui, je suis consultant dans la plus grande banque d'Amérique latine et je travaille dans le secteur des cartes de crédit. J'apprends beaucoup du partenaire et je continue toujours, travailler quelque chose qui implique des chiffres, des chiffres et des clients est très difficile, mais, surtout, une belle expérience pour moi.
    J'aime remettre en question, suivre les projets depuis leur planification, dans leur construction, dans la livraison et bien sûr, dans leur cycle de vie en faisant toujours des tests comme des tests en boîte noire, des tests en boîte blanche, de bout en bout, de la régression, des tests automatisés entre autres .
    En janvier 2022, Concrete fusionne définitivement avec Accenture do Brasil.
    Aujourd'hui, je fais partie d'Accenture en tant qu'Assurance Qualité, mais je continue à exercer la même activité qu'avant.
    Je fais mes projets et mon travail, je le fais avec beaucoup d'amour.`,
    "titleServices": "Principales technologies utilisées.",
    "paragraphServices": "Technologies utilisées dans ma vie quotidienne.",
    "btnViewMore": "VOIR PLUS",
    "titleWork": "Projets",
    "paragraphWork": "Quelques projets developpé",
    "titleContact": "Nous contacter",
    "paragrapContat": "Pour plus d'informations",
  },
}