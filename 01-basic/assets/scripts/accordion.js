// toggle accordion function for hiding checkboxes
function toggleAccordion () {
    let acc = document.querySelectorAll(".accordion")
    let accordion = Array.from(acc)
    accordion.forEach(element => {
        element.addEventListener("click", function() {
            this.classList.toggle("active")
            let panel = element.nextElementSibling;
            panel.style.maxHeight ? panel.style.maxHeight = null : panel.style.maxHeight = panel.scrollHeight + "px"
        })
    })
}
