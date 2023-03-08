let productName = document.getElementById('productName')
let productPrice = document.getElementById('productPrice')
let productImage = document.getElementById('productImage')
let productDetails = document.getElementById('productDetails')
let productCategory = document.getElementById('productCategory')
let submitBtn = document.getElementById('submit-product')

let newArr;
submitBtn.addEventListener('click', () => {
    const product = {
        name: productName.value,
        detail: productDetails.value,
        cat: productCategory.value,
        price: productPrice.value,
        imageUrl: productPrice.productImage,
    }
    // newArr = [...JSON.parse(localStorage.getItem('products')), JSON.stringify(product)]
    localStorage.setItem('products', [...JSON.parse(localStorage.getItem('products')), product])
    console.log(JSON.parse(localStorage.getItem('products')).push(product));
})
