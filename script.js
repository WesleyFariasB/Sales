/**
 * Change the current accordion item
 * @param {number} n - The index of the accordion item to be displayed
 */
function changeAccordion(n) {
  const currentAccordion = document.getElementById("accordion-current");

  if (currentAccordion) {
    const currentAccordionContent = currentAccordion.getElementsByClassName("content")[0];

    currentAccordionContent.style.transition = "max-height 0.2s, padding 0.5s";
  }

  currentAccordion.id = "";

  const accordionItems = document.getElementsByClassName("accordion-item");
  accordionItems[n].id = "accordion-current";
  accordionItems[n].style.display = "block";

  changeSlide(n);
}

/**
 * Change the current slide
 * @param {number} n - The index of the slide to be displayed
 */
function changeSlide(n) {
  const currentSlide = document.getElementById("slide-current");
  const currentDot = document.getElementById("dot-current");

  if (currentSlide) {
    currentSlide.style.display = "none";
    currentSlide.id = "";
  }

  if (currentDot) {
    currentDot.id = "";
  }

  const slides = document.getElementsByClassName("slide");
  const dots = document.getElementsByClassName("slide-dot")
  slides[n].style.display = "block";
  slides[n].id = "slide-current";
  dots[n].id = "dot-current";

  changeAccordion(n);
}

/**
 * Changes the slide to the next available slide
 * @param {number} n - The index of the slide to be displayed
 */
function nextSlide() {
  let slideIndex = 0;
  const slides = document.getElementsByClassName("slide");

  console.log(slides);

  for (let i = 0; i < slides.length; i++) {
    if (slides[i].id === "slide-current") {
      slideIndex = i;
      break;
    }
  }

  console.log(slideIndex);

  if (slideIndex === slides.length - 1) {
    slideIndex = 0;
  } else {
    slideIndex++;
  }

  changeSlide(slideIndex);
  changeAccordion(slideIndex);
}

/**
 * Changes the slide to the previous available slide
 * @param {number} n - The index of the slide to be displayed
 */
function prevSlide() {
  let slideIndex = 0;
  const slides = document.getElementsByClassName("slide");
  for (let i = 0; i < slides.length; i++) {
    if (slides[i].id === "slide-current") {
      slideIndex = i;
      break;
    }
  }

  if (slideIndex === 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex--;
  }

  changeSlide(slideIndex);
  changeAccordion(slideIndex);
}


let slideIndex = [1,1];
let slideClassNames = ["slides"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideClassNames[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}