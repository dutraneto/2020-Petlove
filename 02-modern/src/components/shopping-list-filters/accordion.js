// toggle accordion function for hiding checkboxes
if (window.top.location.pathname === '/shopping-list.html') {
    (function toggleAccordion() {
        let acc = document.querySelectorAll('.accordion')
        let accordion = Array.from(acc)
        accordion.forEach((element) => {
            element.addEventListener('click', function (e) {
                e.preventDefault()
                this.classList.toggle('active')
                let panel = this.nextElementSibling
                panel.style.maxHeight
                    ? (panel.style.maxHeight = null)
                    : (panel.style.maxHeight = panel.scrollHeight + 'px')
            })
        })
    })()
}
