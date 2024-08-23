const ACCORDION_ABOUT = 'accordion-about'
const SLIDE_ABOUT = 'slide-about'
const SLIDE_FEATURES = 'slide-features'

let currentAboutSlideOrder = 0;

setInterval(() => {
  if(currentAboutSlideOrder === 3) {
    currentAboutSlideOrder = 0;
    change(currentAboutSlideOrder, 'slide-about','accordion-about')
  } else {
    change(currentAboutSlideOrder, 'slide-about','accordion-about')
    currentAboutSlideOrder++;
  }
}, 5000)


/**
 * Change the current slide
 * @param {number} number - The index of the slide to be displayed
 * @param {string} name
 */
function changeSlide(number, name) {
  const currentSlide = document.getElementById(name);
  const currentDot = document.getElementById(`${name}-dot`);

  if (currentSlide) {
    currentSlide.style.display = "none";
    currentSlide.id = "";
  }

  if (currentDot) {
    currentDot.id = "";
  }

  const slides = document.getElementsByClassName(`${name}-item`);
  const dots = document.getElementsByClassName(`${name}-item-dot`)
  slides[number].style.display = "block";
  slides[number].id = name;
  dots[number].id = `${name}-dot`;

}

function change(number, slideName, accordionName) {
  const currentAccordion = document.getElementById(accordionName);
  const currentSlide = document.getElementById(slideName);
  const currentDot = document.getElementById(`${slideName}-dot`);

  if (currentSlide) {
    currentSlide.style.display = "none";
    currentSlide.id = "";
  }

  if (currentDot) {
    currentDot.id = "";
  }

  const slides = document.getElementsByClassName(`${slideName}-item`);
  const dots = document.getElementsByClassName(`${slideName}-item-dot`)
  slides[number].style.display = "block";
  slides[number].id = slideName;
  dots[number].id = `${slideName}-dot`;

  if (currentAccordion) {
    const currentAccordionContent = currentAccordion.getElementsByClassName("content")[0];
    currentAccordionContent.style.transition = "max-height 0.2s, padding 0.5s";
  }

  currentAccordion.id = "";

  const accordionItems = document.getElementsByClassName(`${accordionName}-item`);
  accordionItems[number].id = accordionName;
  accordionItems[number].style.display = "block";
}

/**
 * Changes the slide to the next available slide
 * @param {string} name - The name of the slide that will be changed
 */
function nextSlide(name) {
  let slideIndex = 0;
  const slides = document.getElementsByClassName(`${name}-item`);

  for (let i = 0; i < slides.length; i++) {
    if (slides[i].id === name) {
      slideIndex = i;
      break;
    }
  }

  if (slideIndex === slides.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }

  changeSlide(slideIndex, name);
  changeText()
}

/**
 * Changes the slide to the previous available slide
 * @param {string} name - The name of the slide that will be changed
*/
function prevSlide(name) {
  let slideIndex = 0;
  const slides = document.getElementsByClassName(`${name}-item`);
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].id === name) {
      slideIndex = i;
      break;
    }
  }
  
  if (slideIndex === 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex--;
  }
  
  changeSlide(slideIndex, name);
  changeText()
}

function changeText() {
  const currentText = document.getElementById("text");
  const currentSubText = document.getElementById('subtext')
  const texts = [
    {
      text: " Rastreie a origem exata do seu Lead",
      subText: `Com o SalesOpers, você captura e rastreia com precisão a origem de cada lead, permitindo entender exatamente de onde vêm os seus melhores clientes (ICP). Isso ajuda a otimizar o uso do seu orçamento de marketing, reduzir o CAC e maximizar as vendas. Potencialize seus esforços e obtenha os melhores resultados.`
    },
    {
      text: " Análise completa da jornada de vendas",
      subText: `Entenda como seus leads evoluem, quais interações são mais eficazes e quais ações aceleram o ciclo de vendas. Assim, você pode otimizar o desempenho da sua equipe, aumentar as taxas de conversão e garantir que nenhuma oportunidade seja perdida. Torne seu processo de vendas mais eficiente e previsível.`
    },
    {
      text: " Automatize e otimize suas campanhas de marketing",
      subText: `Nosso sistema identifica automaticamente os padrões de comportamento dos leads e ajusta suas campanhas em tempo real para maximizar resultados. Com base nos dados rastreados ao longo de toda a jornada de vendas, nossa solução automatiza a alocação de recursos, ajusta mensagens e segmentações, e direciona para onde terá mais impacto.`
    },
    {
      text: " Previsão de resultados de vendas com inteligência de dados",
      subText: `Ao ajustar suas campanhas em tempo real e entender o comportamento dos seus leads, você obtém uma visão clara do que esperar em termos de conversões e receitas. Isso permite tomar decisões informadas, alinhar seus recursos de vendas e marketing, e garantir que você esteja sempre à frente da concorrência.`
    }
  ]

  const slides = document.getElementsByClassName('slide-features-item');
  
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].id === 'slide-features') {
      console.log({currentText, currentSubText})
      currentText.innerHTML = texts[i].text;
      currentSubText.innerHTML = texts[i].subText;
      break;
    }
  }
}
var acc = document.getElementsByClassName("acordion");
var i;
var len = acc.length;
for (i = 0; i < len; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}

function menuShow() {

    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').scr = "img/menu_white_36dp.svg"
    } else {
      menuMobile.classList.add('open')
      document.querySelector('.icon').scr = "img/close_white_36dp.svg"
    }
}