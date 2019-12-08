const slidesTrack = document.querySelector('.hero__slides-container')
const slides = Array.from(slidesTrack.children)
const controls = document.querySelector('.hero__controls')
const dots = Array.from(controls.children)

const slideSize = slides[0].getBoundingClientRect()
const slideWidth = slideSize.width

const moveToSlide = (slidesTrack, currentSlide, targetSlide) => {
    slidesTrack.style.transform = 'translateX(-' + targetSlide.style.slideWidth + ')'
    currentSlide.classList.remove('current-slide')
    targetSlide.classList.add('current-slide')
}

controls.addEventListener('click', e => {
    // was indicator was clicked on?
    const targetDot = e.target.closest('span')
    if(!targetDot) return

    const currentSlide = slidesTrack.querySelector('.current-slide')
    const currentDot = controls.querySelector('.current-slide')
    const targetIndex = dots.findIndex(dot => dot === targetDot)
    const targetSlide = slides[targetIndex]
    console.log(targetSlide)

    moveToSlide(slidesTrack, currentSlide, targetSlide)

    currentDot.classList.remove('current-slide')
    targetDot.classList.add('current-slide')
})
