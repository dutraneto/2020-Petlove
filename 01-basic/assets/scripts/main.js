/*
* Carrousel slider based on
    https://fooobar.com/questions/17301564/multiple-carousels-on-one-page-not-working-single-carousel-works-great-2nd-carousel-disrupts-first
*/

const track = document.querySelector('.hero__carrousel-track')

// track slides from array
const slides = Array.from(track.children)

const nextButton = document.querySelector('.hero__carrousel-btn--right')
const prevButton = document.querySelector('.hero__carrousel-btn--left')

const dotsNav = document.querySelector('.hero__carrousel-nav')
// track dots from array
const dots = Array.from(dotsNav.children)

// get a width value of a slider
const slideWidth = slides[0].getBoundingClientRect().width;

// Arrange the slides next to one another
const setSlidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition);

// Move slide
const moveToSlide = (currentSlide, targetSlide, targetDot, targetIndex) => {
    const currentDot = dotsNav.querySelector('.current-slide')
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')'
    currentSlide.classList.remove('current-slide')
    targetSlide.classList.add('current-slide')

    currentDot.classList.remove('current-slide')
    targetDot.classList.add('current-slide')

    if (targetIndex === 0) {
        prevButton.classList.add('hidden')
        nextButton.classList.remove('hidden')
    } else if (targetIndex == slides.length - 1) {
        prevButton.classList.remove('hidden')
        nextButton.classList.add('hidden')
    } else {
        prevButton.classList.remove('hidden')
        nextButton.classList.remove('hidden')
    }
}

// when I click left, move slides to the left
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide')
    const prevSlide = currentSlide.previousElementSibling
    const slideIndex = slides.findIndex(slide => slide === prevSlide)
    const targetDot = dots[slideIndex]
    //move to the next slide
    moveToSlide(currentSlide, prevSlide, targetDot, slideIndex)
    if (prevSlide == currentSlide) {
        prevButton.classlist.add('hidden')
        moveToSlide(currentSlide, prevSlide, targetDot)
    }
})

// when I click right, move slides to the right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide')
    const nextSlide = currentSlide.nextElementSibling
    const slideIndex = slides.findIndex(slide => slide === nextSlide)
    const targetDot = dots[slideIndex]

    //move to the next slide
    if (slideIndex != -1) moveToSlide(currentSlide, nextSlide, targetDot, slideIndex)
})

// when I click the nav indicators, move to that slide
dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button')

    if (!targetDot) return

    const currentSlide = track.querySelector('.current-slide')
    const targetIndex = dots.findIndex(dot => dot === targetDot)
    const targetSlide = slides[targetIndex]

    moveToSlide(currentSlide, targetSlide, targetDot, targetIndex)
})

// toggle accordion function for hiding checkboxes
function toggleAccordion () {
    let acc = document.querySelectorAll(".accordion")
    let accordion = Array.from(acc)
    accordion.forEach(element => {
        element.classList.toggle("active")
        let panel = element.nextElementSibling;
        panel.style.maxHeight ? panel.style.maxHeight = null : panel.style.maxHeight = panel.scrollHeight + "px"
    })
}
