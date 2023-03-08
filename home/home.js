const fakeProducts = [
  {
    name: "Sony Experia Z",
    detail: "Lorem ipsum dolor sit amet consectetur",
    cat: "mobile",
    price: 150,
    imageUrl:
      "https://fdn.gsmarena.com/imgroot/reviews/22/sony-xperia-5-iv/lifestyle/-1024w2/gsmarena_003.jpg",
  },
  {
    name: "Toshiba",
    detail: "Lorem ipsum dolor sit amet consectetur",
    cat: "smart",
    price: 500,
    imageUrl:
      "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6194/6194907_sd.jpg",
  },
  {
    name: "Philips Smart TV",
    detail: "Lorem ipsum dolor sit amet consectetur",
    cat: "smart",
    price: 500,
    imageUrl: "https://m.media-amazon.com/images/I/81sZG5zuWGL._SL1500_.jpg",
  },
  {
    name: "LG G6",
    detail: "Lorem ipsum dolor sit amet consectetur",
    cat: "smart",
    price: 250,
    imageUrl:
      "https://fdn.gsmarena.com/imgroot/reviews/17/lg-g6/lifestyle/-728w2/gsmarena_007.jpg",
  },
  {
    name: "T-shirt",
    detail: "Lorem ipsum dolor sit amet consectetur",
    cat: "clothes",
    price: 300,
    imageUrl:
      "https://www.machinescreenprinters.com.au/wp-content/uploads/2021/10/alstyle_1301_gold.jpg",
  },
  {
    name: "Samsung Galaxy Ultra 13",
    detail: "Lorem ipsum dolor sit amet consectetur",
    cat: "mobile",
    price: 500,
    imageUrl:
      "https://media.wired.com/photos/6008b7cd103a85a519187c3e/master/pass/Gear-galaxys21_plus_phantom_silver_front.jpg",
  },
  {
    name: "Washing Machine",
    detail: "Lorem ipsum dolor sit amet consectetur",
    cat: "home",
    price: 100,
    imageUrl:
      "https://hips.hearstapps.com/hmg-prod/images/washing-machine-at-blue-wall-frontal-view-with-copy-royalty-free-image-1096523200-1564593294.jpg?crop=0.645xw:1.00xh;0.179xw,0&resize=1200:*",
  },
  {
    name: "BabyLiss Hair",
    detail: "Lorem ipsum dolor sit amet consectetur",
    cat: "beauty",
    price: 450,
    imageUrl:
      "https://www.babyliss.com/on/demandware.static/-/Sites-ml-babyliss-Library/default/dw1463301a/images/homepage/wayfinders/PHCON03340-Website-Pods-667x450px-Dryer[88].jpg",
  },
  {
    name: "Nice Winter Jacket",
    detail: "Lorem ipsum dolor sit amet consectetur",
    cat: "clothes",
    price: 400,
    imageUrl:
      "https://img.cdn.mountainwarehouse.com/product/053054/053054_bla_seasons_ii_padded_jacket_men_aw22_02.jpg",
  },
  {
    name: "iPhone 12 Promax",
    detail: "Lorem ipsum dolor sit amet consectetur",
    cat: "mobile",
    price: 500,
    imageUrl:
      "https://estore.jawwal.ps/storage/product/2170/2Dwf49jZM2PWQl7BA5h1DAd489d8VIl733pu7tnI.png",
  },
];

localStorage.setItem("products", JSON.stringify(fakeProducts));

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

let products = JSON.parse(localStorage.getItem("products"));
if (products === null) {
  products = [];
}
console.log(products);

let arr = JSON.parse(localStorage.getItem("products"));

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
      <button id='delete'><i class="fa-solid fa-trash fa-2x"></i></button>
    </li>`;
};
fakeProducts.forEach((prod) =>
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
  if (event.target.closest("button").id === "delete") {
    e.target.closest("li").remove();
    cartArr.splice(cartEls.indexOf(e.target.closest("li")), 1);
  }

  console.log(cartArr);
  // filtr((_, i) => i !== cartEls.indexOf(e.target.closest("li")));
  totalCountEl.textContent = cartArr.length;
});
productsContainer.addEventListener("click", addtoCartHandler);
cardBtn.addEventListener("click", showList);
search.addEventListener("click", searchProducts);
