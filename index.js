
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
console.log(curriculum)


curriculum.addEventListener('mouseover', () => {
   const teste = document.createElement('div');
   teste.classList = 'msgCurriculum textoTeste';
   teste.style.display = 'block';
   teste.innerHTML = 'Download';
   curriculum.appendChild(teste)
   curriculum.addEventListener('mouseout', () => {
     teste.style.display = 'none';
   })
})

const letterMachine = (el) => {
  const text = el.innerHTML.split('');
  el.innerHTML =''
  text.forEach((letra, index) => {
    setTimeout(() =>{
      el.innerHTML += letra
    }, 80 * index);
  })
}

setInterval(() => letterMachine(subtitle), 6000);
  
window.addEventListener('scroll',()=>{
  const nav = document.querySelector('nav');
  nav.classList.toggle('sticky',window.scrollY > 0)
  
})

const toggleMenu = ()=>{
  const menuToggle = document.querySelector('.toggle');
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
  menuToggle.classList.toggle('active');
}

const br = document.createElement('br');
const texto = document.createTextNode("Fanderson Kaecio")
const span = document.createElement('span')

link.forEach( el =>{
  el.addEventListener('click',()=>{
    subtitle.textContent = ''
    clearInterval(setInterval(() => letterMachine(subtitle)), console.log('parou'))
    
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
  "english":
  {
    "title": "Hello, I'm",
    "subTitle":"I am Quality Assurance at Accenture",
    "btnAboutMe":"About Me",
    "titleContext":"I am Quality Assurance at Accenture.",
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
    "titleContact":"Contact us",
    "paragrapContat":"For more informations",
  },
  "brazilian":
  {
    "title": "Olá, Eu sou",
    "subTitle":"Eu sou Quality Assurance na Accenture",
    "btnAboutMe":"Sobre mim",
    "titleContext":"Eu sou Quality Assurance na Accenture",
    "description":`Tenho 37 anos, dois filhos lindos e uma família quem eu amo.
    Sou apaixonado por tecnologia desde sempre.
    Sou formado em Análise e Desenvolvimento de Sistemas pela Universidade Nove de Julho – 2014.  
    
    Comecei a minha carreira como Quality Assurance na Concrete Solutions em 2021. Hoje, sou consultor no maior banco da América Latina e atuo na parte de cartões de créditos. Aprendo muito no parceiro e ainda continuo, trabalhar algo que envolve números, cifras e clientes é muito desafiador, mas, acima de tudo, uma grande experiência para mim.
    
       Adoro questionar, acompanhar os projetos desde o seu planejamento, na sua construção, na entrega e claro, no seu ciclo de vida sempre fazendo testes como teste de caixa preta, teste de caixa branca, end to end, deste de regressão, testes automatizados entre outros.
    
     Em janeiro de 2022 a Concrete teve a sua junção definitiva com a Accenture do Brasil.
        Hoje, faço parte da Accenture como Quality Assurance, mas, continuo realizando a mesma atividade que fazia antes.
    Eu faço os meus projetos e o meu trabalho, eu faço com muito amor. .`,
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
    "subTitle": "Je suis Quality Assurance chez Accenture",
    "btnAboutMe":"À propos de moi",
    "titleContext":"Je suis Quality Assurance chez Accenture",
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