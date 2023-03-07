const productsContainer = document.querySelector(".products-container");
const products = [
  {
    name: "Closed-Back Headphones",
    detail: "Lorem ipsum dolor sit amet consectetur",
    cat: "smart",
    price: 50,
    imageUrl: "https://unsplash.com/photos/oXXc-s5nNy8",
  },

  {
    name: "sony camera",
    detail: "Lorem ipsum dolor sit amet consectetur",
    cat: "smart",
    price: 750,
    imageUrl: "https://unsplash.com/photos/6qesnUQceJA",
  },

  {
    name: "iphone 12",
    detail: "Lorem ipsum dolor sit amet consectetur",
    cat: "smart",
    price: 500,
    imageUrl: "https://unsplash.com/photos/ZwKCWVFdrcs",
  },

  {
    name: "laptop",
    detail: "Lorem ipsum dolor sit amet consectetur",
    cat: "smart",
    price: 1000,
    imageUrl: "https://unsplash.com/photos/mP7aPSUm7aE",
  },

  {
    name: "shoes",
    detail: "Lorem ipsum dolor sit amet consectetur",
    cat: "fashion",
    price: 40,
    imageUrl: "https://unsplash.com/photos/jvoZ-Aux9aw",
  },

  {
    name: "shirt",
    detail: "Lorem ipsum dolor sit amet consectetur",
    cat: "fashion",
    price: 40,
    imageUrl: "https://unsplash.com/photos/7cERndkOyDw",
  },

  {
    name: "trouser",
    detail: "Lorem ipsum dolor sit amet consectetur",
    cat: "fashion",
    price: 70,
    imageUrl:
      "https://www.istockphoto.com/photo/beautiful-denim-pants-gm639511940-115301581?phrase=trousers",
  },
];

const renderProduct = function ({ name, detail, price, imageUrl, cat }) {
  return `
    <div class="product-box"> 
    <div  class="product__head">
      <img class="product__img" src="${imageUrl}" alt="product-pic">
    </div>
      <div class="product__info">
        <h3>${name}</h3>
          <h5 class="prodeuct__category">${cat.toUpperCase()}</h5>
          <p>${detail}</p>
          <h3 class="prodeuct__price">${price}$</h3>
          <button id="buy">Add to Card</button>
      </div>
      </div>`;
};
products.forEach((prod) =>
  productsContainer.insertAdjacentHTML("afterbegin", renderProduct(prod))
);
