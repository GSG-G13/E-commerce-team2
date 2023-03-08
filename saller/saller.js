let productName = document.getElementById('productName')
let productPrice = document.getElementById('productPrice')
let productImage = document.getElementById('productImage')
let productDetails = document.getElementById('productDetails')
let productCategory = document.getElementById('productCategory')
let submitBtn = document.getElementById('submit-product')
let form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()

    const product = {
        name: productName.value,
        detail: productDetails.value,
        cat: productCategory.value,
        price: productPrice.value,
        imageUrl: productImage.value,
    }   

    let products = JSON.parse(localStorage.getItem('products'))
    if(products === null){
        products = []
    }
    
    products.push(product)
    localStorage.setItem('products', JSON.stringify(products))

    productName.value = ''
    productDetails.value = ''
    productCategory.value = ''
    productPrice.value = ''
    productImage.value = ''
})
