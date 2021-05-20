
const langEl = document.querySelector('.lang-menu');
const link = document.querySelectorAll('a');
const titleEl = document.querySelector('.title');
const subtitle = document.querySelector('.subtitle');
const description = document.querySelector('.description');
const btnAboutMe  = document.querySelector('.btnAboutMe');
const titleContext = document.querySelector('.title-contex');
const titleServices = document.querySelector('.title-services');
const paragraphServices = document.querySelector('.paragraph-services');
const titleWork = document.querySelector('.title-work');
const paragraphWork = document.querySelector('.paragraph-work');
const btnViewMore = document.querySelector('.btnViewMore');
const titleContact = document.querySelector('.title-contact');
const paragrapContat = document.querySelector('.paragrapContat');
const curriculum = document.querySelector('.curriculum');

window.addEventListener('scroll',()=>{
  const nav =  document.querySelector('nav');
  nav.classList.toggle('sticky',window.scrollY > 0)
})

curriculum.addEventListener('click',(e)=>{
  e.preventDefault()
  window.location.href = "https://github.com/Kaecio/Portfolio/tree/main/files/Curriculo-Fanderson.pdf";
})

const toggleMenu = ()=>{
  const menuToggle = document.querySelector('.toggle');
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
  menuToggle.classList.toggle('active');
}

//----------------------------
const br = document.createElement('BR');
const texto = document.createTextNode("Fanderson Kaecio.")
const span = document.createElement('SPAN')
//-----------------------------


link.forEach( el =>{
  el.addEventListener('click',()=>{

    //----------------------------
    span.appendChild(texto)
    br.appendChild(span);
    document.querySelector('.title').appendChild(br)
    //----------------------------

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

const data = {
  "english":
  {
    "title": "Hello, I'm",
    "subTitle":"I'm a Developer Full Stack student",
    "btnAboutMe":"About Me",
    "titleContext":"I'm a Developer Full Stack student.",
    "description":`I have been passionate about technology since I was young. 
    I do my projects and my works with a lot of love. I am a student of Web development at the Trybe school of technology, 
    I was able to learn more and more about the needs of the market today so 
    I have been studying and deepening each day. I am 36 years old, have two beautiful children and a family whom I love. 
    I am not the owner of the truth and I don't even know what awaits me in the future, but one thing is certain, 
    the passion for my family and technology will be with me forever.`,
    "titleServices":"Main Tecnologys used.",
    "paragraphServices":"Technologies used in my daily life.",
    "btnViewMore":"VIEW MORE",
    "titleWork":"Projects",
    "paragraphWork":"Some projects developed",
    "titleContact":"Contact Us",
    "paragrapContat":"For more information",
  },
  "brazilian":
  {
    "title": "Olá, Eu sou",
    "subTitle":"Eu sou estudante de Desenvolvimeto Full Stack",
    "btnAboutMe":"Sobre mim",
    "titleContext":"Eu sou estudante de Desenvolvimeto Full Stack",
    "description":`Sou apaixonado por tecnologia desde jovem. 
    Eu faço os meus projetos e os meus trabalhos com muito amor. 
    Eu sou estudante de desenvolvimento Web na escola Trybe de tecnologia, eu pude aprender cada dia mais sobre a 
    necessidade do mercado nos dias atuais por isso eu venho estudando e me aprofundando a cada dia. Tenho 36 anos, 
    dois filhos lindos e uma família quem eu os amo. Não sou o dono da verdade e nem sei o que me espera no futuro, 
    mas uma coisa é certa, a paixão pela minha famía e pela tecnologia estarão comigo para sempre.`,
    "titleServices":"Principais tecnologias usadas.",
    "paragraphServices":"Tecnologias utilizadas no meu dia a dia.",
    "btnViewMore":"VEJA MAIS",
    "titleWork":"Projetos",
    "paragraphWork":"Alguns projetos desenvolvidos",
    "titleContact":"Contate nos",
    "paragrapContat":"Para mais informações",
  },
  "french":
  {
    "title": "Salut, Je m'appelle",
    "subTitle": "Je suis etudiant de développeur Full Stack",
    "btnAboutMe":"À propos de moi",
    "titleContext":"Je suis etudiant de développeur Full Stack",
    "description":`Je suis passionné de technologie depuis mon plus jeune âge.
    Je fais mes projets et mes œuvres avec beaucoup d'amour.
    Je suis étudiant en développement Web à l'école de technologie Trybe, j'ai pu en apprendre de plus en plus sur le
    nécessité du entreprises de nos jours, j'ai donc étudié et approfondi chaque jour. J'ai 36 ans,
    deux beaux enfants et une famille que j'aime. Je ne suis pas le propriétaire de la vérité et je ne sais même pas ce qui m'attend dans le futur,
    mais une chose est sûre, la passion pour ma famille et la technologie sera avec moi pour toujours.`,
    "titleServices":"Principales technologies utilisées.",
    "paragraphServices":"Technologies utilisées dans ma vie quotidienne.",
    "btnViewMore":"VOIR PLUS",
    "titleWork":"Projets",
    "paragraphWork":"Quelques projets developpé",
    "titleContact":"Nous contacter",
    "paragrapContat":"Pour plus d'informations",
  },
}
