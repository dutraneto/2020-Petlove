// update prices on input range
function updatePriceLabels() {
    const ranges = document.querySelectorAll(".shopping-list__range input")
    const labels = document.querySelectorAll(".shopping-list__range .shopping-list__range-price label")

    // const minValue = parseInt(ranges[0].min)
    // const maxValue = parseInt(ranges[0].max)
    let price1 = parseInt(ranges[0].value)
    let price2 = parseInt(ranges[1].value)

    // avoid lowest price overlaps highest
    price1 >= price2 ? ranges[1].value = price1 + 10 : null
    price2 <= price1 ? ranges[0].value = price2 - 10 : null

    // update price labels
    labels[0].innerHTML = "$ " + price1
    labels[1].innerHTML = "$ " + price2
}
(function resetFilters() {
    const reset = document.getElementsByClassName("filter-btn")[0]
    const ranges = document.querySelectorAll(".shopping-list__range input")
    const labels = document.querySelectorAll(".shopping-list__range .shopping-list__range-price label")
    const inputSearch = document.getElementById("search-brand")
    const controls = document.querySelectorAll(".checkbox-control input")
    reset.addEventListener("click", function(e) {
        // do not refresh
        e.preventDefault()
        // reset ranges
        // ranges[0].value = "0"
        // ranges[1].value = "10000"
        labels[0].innerHTML = `$ ${ranges[0].value = 0}`
        labels[1].innerHTML = `$ ${ranges[1].value = 10000}`
        // reset input search
        inputSearch.value = ""
        // reset all checkboxes
        const arrControl = [...controls]
        arrControl.forEach(control => {
            control.checked = false
        });
    })
})()
