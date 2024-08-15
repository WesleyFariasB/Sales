const ACCORDION_ABOUT = 'accordion-about'
const SLIDE_ABOUT = 'slide-about'
const SLIDE_FEATURES = 'slide-features'

/**
 * Change the current accordion item
 * @param {number} number - The index of the accordion item to be displayed
 * @param {string} name - The name of the accordion that will be changed
 * @param {string} slideName - The name of the slide that will be changed on accordion change
 */
function changeAccordion(number, name, slideName) {
  const currentAccordion = document.getElementById(name);

  if (currentAccordion) {
    const currentAccordionContent = currentAccordion.getElementsByClassName("content")[0];
    currentAccordionContent.style.transition = "max-height 0.2s, padding 0.5s";
  }

  currentAccordion.id = "";

  const accordionItems = document.getElementsByClassName(`${name}-item`);
  accordionItems[number].id = name;
  accordionItems[number].style.display = "block";

  changeSlide(number, slideName);
}

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

  changeAccordion(number);
}

/**
 * Changes the slide to the next available slide
 * @param {string} name - The name of the slide that will be changed
 */
function nextSlide(name) {
  let slideIndex = 0;
  const slides = document.getElementsByClassName(`${name}-item`);

  console.log(slides);

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
}