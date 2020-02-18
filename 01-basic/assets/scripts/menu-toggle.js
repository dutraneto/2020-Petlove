// toggle menu
(function menuToggle () {
    let menuBars = document.getElementsByClassName("menu-open")[0]
    let navMobile = document.getElementsByClassName("navbar-mobile")[0]
    let menuClose = document.getElementsByClassName("menu-close")[0]
    let header = document.getElementsByClassName("hero")[0]
    menuBars.addEventListener("click", function(e) {
        e.preventDefault()
        navMobile.classList.add("open")
        header.style.filter = "blur(5px)"
        // if(!menuClose.classList.contains("menu-close--none")) {
        //     menuClose.classList.remove("menu-close--none")
        // }
        // menuClose.style.display = "block"
        // navbar.children[1].classList.add("navbar__items--column")
    })
    menuClose.addEventListener("click", function(e) {
        e.preventDefault()
        this.parentElement.classList.remove("open")
        header.style.filter = "blur(0)"
    })

})()
