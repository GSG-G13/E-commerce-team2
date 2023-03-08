// Start Landing Page

const cartEl = document.getElementById("cart");
const cartList = document.querySelector(".cart-list");
const cardBtn = document.querySelector(".fa-cart-shopping");
const totalCountEl = document.querySelector(".items-count");
const totalPriceEl = document.querySelector(".total-price");
const select = document.querySelector("select");
const inputSearch = document.querySelector("#search");
let counter = 1;
let cartArr = [];
setInterval(() => {
  document.getElementById("radio" + counter).checked = true;
  counter++;

  if (counter > 5) {
    counter = 1;
  }
}, 5000);

// End Landing Page

const productsContainer = document.querySelector(".products-container");

const renderProduct = function ({ name, detail, price, imageUrl, cat }) {
  return `
  <div class="product-box"> 
    <img class="product__img" src="${imageUrl}" alt="product-pic">
    <div class="product__info">
      <h3>${name.toUpperCase()}</h3>
        <h5 class="product__category">${cat.toUpperCase()}</h5>
        <p>${detail}</p>
        <h2 class="prodeuct__price">${price}$</h2>
        <button id="add">Add to Card</button>
    </div>
    </div>`;
};
const renderCartProduct = function ({ name, detail, price }) {
  return `<li class="cart-product-box">
      <div class= 'cart-product-info-box'>
      <h4>${name}</h4>
      <p>${detail}</p>
      <h3>${price}</h3>
      </div>
      <button><i class="fa-solid fa-trash fa-2x"></i></button>
    </li>`;
};
products.forEach((prod) =>
  productsContainer.insertAdjacentHTML("afterbegin", renderProduct(prod))
);

const addtoCartHandler = function (e) {
  const productsEls = Array.from(
    document.querySelectorAll(".product-box")
  ).reverse();
  if (e.target.id === "add") {
    product = products.find(
      (_, i) => i === productsEls.indexOf(e.target.closest(".product-box"))
    );
    const newArray = addToCart(cartArr, product);
    localStorage.setItem("cartItems", JSON.stringify(newArray));
    totalPriceEl.textContent =
      cartArr.map((p) => p.price).reduce((a, b) => a + b) || 0;
    totalCountEl.classList.remove("hidden");
    totalCountEl.textContent = cartArr.length;
    cartList.insertAdjacentHTML("afterbegin", renderCartProduct(product));
  }
};

const showList = () => {
  cartEl.classList.toggle("hidden");
};
const searchProducts = function () {
  if (select.value) {
    productsContainer.innerHTML = "";
    products
      .filter(
        (prod) =>
          prod.cat === select.value ||
          (prod.price > +select.value - 99 && prod.price <= +select.value)
      )
      .forEach((prod) =>
        productsContainer.insertAdjacentHTML("afterbegin", renderProduct(prod))
      );
  }
  if (inputSearch.value) {
    productsContainer.innerHTML = "";
    products
      .filter((prod) =>
        prod.name.toLowerCase().includes(inputSearch.value.toLowerCase())
      )
      .forEach((prod) =>
        productsContainer.insertAdjacentHTML("afterbegin", renderProduct(prod))
      );
  }
  if (inputSearch.value && select.value !== "0") {
    productsContainer.innerHTML = "";
    products
      .filter((prod) =>
        prod.name.toLowerCase().includes(inputSearch.value.toLowerCase())
      )
      .filter((prod) => prod.cat === select.value)
      .forEach((p) =>
        productsContainer.insertAdjacentHTML("afterbegin", renderProduct(p))
      );
  }
};
cartList.addEventListener("click", function (e) {
  const cartEls = Array.from(document.querySelectorAll(".cart-product-box"));
  e.target.closest("li").remove();

  // cartArr
  //   .filter((_, i) => i !== cartEls.indexOf(e.target.closest("li")))
  //   .forEach((pro) =>
  //     cartList.insertAdjacentHTML("afterbegin", renderCartProduct(pro))
  //   );
  totalCountEl.textContent = cartArr.length;
});
productsContainer.addEventListener("click", addtoCartHandler);
cardBtn.addEventListener("click", showList);
search.addEventListener("click", searchProducts);
