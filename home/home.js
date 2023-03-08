const productsContainer = document.querySelector(".products-container");
const products = [
  {
    name: "Closed-Back Headphones",
    detail: "Lorem ipsum dolor sit amet consectetur",
    cat: "smart",
    price: 50,
    imageUrl:
      "https://images.unsplash.com/photo-1585298723682-7115561c51b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },

  {
    name: "Sony Camera",
    detail: "Lorem ipsum dolor sit amet consectetur",
    cat: "smart",
    price: 750,
    imageUrl:
      "https://images.unsplash.com/photo-1606986628470-26a67fa4730c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },

  {
    name: "iphone 12",
    detail: "Lorem ipsum dolor sit amet consectetur",
    cat: "smart",
    price: 500,
    imageUrl:
      "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },

  {
    name: "laptop",
    detail: "Lorem ipsum dolor sit amet consectetur",
    cat: "smart",
    price: 1000,
    imageUrl:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80",
  },

  {
    name: "shoes",
    detail: "Lorem ipsum dolor sit amet consectetur",
    cat: "fashion",
    price: 40,
    imageUrl:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },

  {
    name: "shirt",
    detail: "Lorem ipsum dolor sit amet consectetur",
    cat: "fashion",
    price: 40,
    imageUrl:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80",
  },

  {
    name: "trouser",
    detail: "Lorem ipsum dolor sit amet consectetur",
    cat: "fashion",
    price: 70,
    imageUrl:
      "https://www.istockphoto.com/photo/beautiful-denim-pants-gm639511940-115301581?phrase=trousers",
  },

  {
    name: "Closed-Back Headphones",
    detail: "Lorem ipsum dolor sit amet consectetur",
    cat: "smart",
    price: 50,
    imageUrl:
      "https://images.unsplash.com/photo-1585298723682-7115561c51b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80",
  },

  {
    name: "sony camera",
    detail: "Lorem ipsum dolor sit amet consectetur",
    cat: "smart",
    price: 750,
    imageUrl:
      "https://images.unsplash.com/photo-1606986628470-26a67fa4730c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
  },

  {
    name: "iphone 12",
    detail: "Lorem ipsum dolor sit amet consectetur",
    cat: "smart",
    price: 500,
    imageUrl:
      "https://images.unsplash.com/photo-1589492477829-5e65395b66cc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },

  {
    name: "laptop",
    detail: "Lorem ipsum dolor sit amet consectetur",
    cat: "smart",
    price: 1000,
    imageUrl:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80",
  },

  {
    name: "shoes",
    detail: "Lorem ipsum dolor sit amet consectetur",
    cat: "fashion",
    price: 40,
    imageUrl:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
  },

  {
    name: "shirt",
    detail: "Lorem ipsum dolor sit amet consectetur",
    cat: "fashion",
    price: 30,
    imageUrl:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80",
  },

  {
    name: "trouser",
    detail: "Lorem ipsum dolor sit amet consectetur",
    cat: "fashion",
    price: 70,
    imageUrl:
      "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1072&q=80",
  },
];

const renderProduct = function ({ name, detail, price, imageUrl, cat }) {
  return `
  <div class="product-box"> 
    <img class="product__img" src="${imageUrl}" alt="product-pic">
    <div class="product__info">
      <h3>${name}</h3>
        <h5 class="product__category">${cat.toUpperCase()}</h5>
        <p>${detail}</p>
        <h2 class="prodeuct__price">${price}$</h2>
        <button id="buy">Add to Card</button>
    </div>
    </div>`;
};
products.forEach((prod) =>
  productsContainer.insertAdjacentHTML("afterbegin", renderProduct(prod))
);
