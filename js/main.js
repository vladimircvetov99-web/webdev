const ITEM_WIDTH = 407 + 30;
const SLIDER_COUNT = 5;

const sliderInner = document.querySelector('#slider');
const sliderArrowLeft = document.querySelector('#slider-arrow-left');
const sliderArrowRight = document.querySelector('#slider-arrow-right');
const sliderCounter = document.querySelector('#slider-counter');
let currentSlide = 1;

function updateSliderCounter() {
    const activeSlideIndex = Math.ceil(sliderInner.scrollLeft / ITEM_WIDTH) + 1;

    sliderCounter.innerText = `${activeSlideIndex} / ${SLIDER_COUNT}`;
}

sliderArrowLeft.addEventListener('click', () => {
    const scrollPosition = sliderInner.scrollLeft - ITEM_WIDTH;
    
    sliderInner.scroll({
        left: scrollPosition < 0 ? 0 : scrollPosition,
        behavior: 'smooth'
    });

    updateSliderCounter();
});

sliderArrowRight.addEventListener('click', () => {
    const scrollPosition = sliderInner.scrollLeft + ITEM_WIDTH;
    
    sliderInner.scroll({
        left: scrollPosition,
        behavior: 'smooth'
    });

    updateSliderCounter();
});

sliderInner.addEventListener('scroll', () => {
    updateSliderCounter();
});
