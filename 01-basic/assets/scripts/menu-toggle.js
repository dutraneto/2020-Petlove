// toggle menu
(function menuToggle () {
    let body = document.body
    let menuBars = document.getElementsByClassName("menu-open")[0]
    let navMobile = document.getElementsByClassName("navbar")[0]
    let menuClose = document.getElementsByClassName("menu-close")[0]

    menuBars.addEventListener("click", function(e) {
        e.preventDefault()
        navMobile.classList.toggle("open")
        body.classList.toggle("no-scroll")
    })
    menuClose.addEventListener("click", function(e) {
        e.preventDefault()
        this.parentElement.classList.remove("open")
        this.parentElement.classList.add("close")
        body.classList.toggle("no-scroll")
        // insert timer to remove class 'close' avoiding navbar animation on resizing window
        setTimeout(() => {
            this.parentElement.classList.remove("close")
        }, 1000);
    })

})()
