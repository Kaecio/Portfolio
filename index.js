

window.addEventListener('scroll',()=>{
  const nav =  document.querySelector('nav');
  nav.classList.toggle('sticky',window.scrollY > 0)
})

const langEl = document.querySelector('.lang-menu');
const link = document.querySelectorAll('a');
const titleEl = document.querySelector('.title');
const nameDev = document.getElementById('title-name');
const subtitle = document.querySelector('.subtitle');
const description = document.querySelector('.description');
const btnAboutMe  = document.querySelector('.btnAboutMe');
const titleContext = document.querySelector('.title-contex');
const titleServices = document.querySelector('.title-services');
const paragraphServices = document.querySelector('.paragraph-services');
const titleWork = document.querySelector('.title-work');
const paragraphWork = document.querySelector('.paragraph-work');
const btnViewMore = document.querySelector('.btnViemMore');

//----------------------------
const br = document.createElement('BR');
const texto = document.createTextNode("EROS")
const span = document.createElement('SPAN')
//-----------------------------


br.appendChild(texto);
titleEl.appendChild(span);


link.forEach( el =>{
  el.addEventListener('click',()=>{

    const attr = el.getAttribute('language');
    titleEl.textContent = data[attr].title;
    subtitle.textContent = data[attr].subTitle;
    btnAboutMe.textContent = data[attr].btnAboutMe;
    titleContext.textContent = data[attr].titleContext;
    description.textContent = data[attr].description;
    titleServices.textContent = data[attr].titleServices;
    paragraphServices.textContent = data[attr].paragraphServices;
    nameDev.textContent = data[attr].fullNameDev;
    titleWork.textContent = data[attr].titleWork;
    paragraphWork.textContent = data[attr].paragraphWork;
    btnViewMore.textContent = data[attr].btnViewMore;
    console.log(nameDev.textContent)
  })
})

const data = {
  "english":
  {
    "title": "Hello, I'm",
    "fullNameDev":"Fanderson Kaécio",
    "subTitle":"I'm a Developer Full Stack student",
    "btnAboutMe":"About Me",
    "titleContext":"I'm a Developer Full Stack student.",
    "description":`I am passionate about technology and games. My mission is to learn more every day,
    to improve everything around my life and the people I love.
    I am a student of Full Stack Development at Trybe school.
    Technology has entered my life and I hope that remaining with it remains of my life.
    I am a student of Full Stack Development at Trybe school.
    I am passionate about technology and games. My mission is to learn more every day,
    to improve everything around my life and the people I love.
    Technology has entered my life and I hope that remaining with it remains of my life.`,
    "titleServices":"Main Tecnologys used.",
    "paragraphServices":"Technologies used in my daily life.",
    "btnViewMore":"VIEW MORE",
    "titleWork":"Projects",
    "paragraphWork":"Some projects developed"

  },
  "brazilian":
  {
    "title": "Olá, Eu sou",
    "fullNameDev":"Fanderson Kaécio",
    "subTitle":"Eu sou estudante de Desenvolvimeto Full Stack",
    "btnAboutMe":"Sobre mim",
    "titleContext":"Eu sou estudante de Desenvolvimeto Full Stack",
    "description":"teste",
    "titleServices":"Principais tecnologias usadas.",
    "paragraphServices":"Tecnologias utilizadas no meu dia a dia.",
    "btnViewMore":"VEJA MAIS",
    "titleWork":"Projetos",
    "paragraphWork":"Alguns projetos desenvolvidos"
  },
  "french":
  {
    "title": "Salut, Je m'appelle",
    "fullNameDev":"Fanderson Kaecio.",
    "subTitle": "Je suis etudiant de développeur Full Stack",
    "btnAboutMe":"À propos de moi",
    "titleContext":"Je suis etudiant de développeur Full Stack",
    "description":"test",
    "titleServices":"Principales technologies utilisées.",
    "paragraphServices":"Technologies utilisées dans ma vie quotidienne.",
    "btnViewMore":"VOIR PLUS",
    "titleWork":"Projets",
    "paragraphWork":"Quelques projets developpé"
  },
}
