(function productToSelect() {
    const productToSelect = document.getElementsByClassName('img-to-select')
    const selectedProduct = document.getElementById('selected-img')
    const productToSelectArray = Array.from(productToSelect)
    productToSelectArray.forEach(img => {
        img.addEventListener('click', function(evt) {
            evt.preventDefault()
            selectedProduct.src = this.src
        })
    })
})()
