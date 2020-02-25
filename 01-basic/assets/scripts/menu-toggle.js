// toggle menu
(function menuToggle () {
    let body = document.body
    let menuBars = document.getElementsByClassName("menu-open")[0]
    let navMobile = document.getElementsByClassName("navbar-mobile")[0]
    let menuClose = document.getElementsByClassName("menu-close")[0]

    menuBars.addEventListener("click", function(e) {
        e.preventDefault()
        navMobile.classList.add("open")
        body.classList.toggle("no-scroll")
    })
    menuClose.addEventListener("click", function(e) {
        e.preventDefault()
        this.parentElement.classList.remove("open")
        body.classList.toggle("no-scroll")
    })

})()
