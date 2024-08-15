const ACCORDION_ABOUT = 'accordion-about'
const SLIDE_ABOUT = 'slide-about'
const SLIDE_FEATURES = 'slide-features'


/**
 * Change the current slide
 * @param {number} number - The index of the slide to be displayed
 * @param {string} name
 */
function changeSlide(number, name, accordionName) {
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
function changeText(text, subtext) {
  const text = document.getElementById('text');
  const subText = document.getElementById('subtext');
  const texts = [{
    text: "Obtenha insights<br>poderosos com análises<br>avançadas de KPIs.", subText: `Lorem Ipsum is simply dummy text of the<br>printing and typesetting industry.
  Lorem<br>Ipsum has been the industry's standard<br>dummy text ever since the 1500s, when an<br>unknown printer took.`}]

  let slideIndex = 0;
  const slides = document.getElementsByClassName('slide-Features-item');
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].id === 'slide-features') {
      slideIndex = i;
      break;
    }
  }
}
