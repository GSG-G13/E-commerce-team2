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
    imageUrl: "https://picsum.photos/270",
  },
  {
    name: "iPhone 12 Promax",
    detail: "Lorem ipsum dolor sit amet consectetur",
    cat: "smart",
    price: 500,
    imageUrl: "https://picsum.photos/270",
  },
  {
    name: "lg",
    detail: "Lorem ipsum dolor sit amet consectetur",
    cat: "smart",
    price: 250,
    imageUrl: "https://picsum.photos/270",
  },
  {
    name: "iPhone 12 Promax",
    detail: "Lorem ipsum dolor sit amet consectetur",
    cat: "clothes",
    price: 300,
    imageUrl: "https://picsum.photos/270",
  },
  {
    name: "Samsung Galaxy Ultra 13",
    detail: "Lorem ipsum dolor sit amet consectetur",
    cat: "mobile",
    price: 500,
    imageUrl: "https://picsum.photos/270",
  },
  {
    name: "Washing Machine",
    detail: "Lorem ipsum dolor sit amet consectetur",
    cat: "home",
    price: 100,
    imageUrl: "https://picsum.photos/270",
  },
  {
    name: "iPhone 12 Promax",
    detail: "Lorem ipsum dolor sit amet consectetur",
    cat: "beauty",
    price: 450,
    imageUrl: "https://picsum.photos/270",
  },
  {
    name: "Nice Winter Jacket",
    detail: "Lorem ipsum dolor sit amet consectetur",
    cat: "clothes",
    price: 400,
    imageUrl: "https://picsum.photos/270",
  },
  {
    name: "iPhone 12 Promax",
    detail: "Lorem ipsum dolor sit amet consectetur",
    cat: "mobile",
    price: 500,
    imageUrl: "https://picsum.photos/270",
  },
];



localStorage.setItem('products', JSON.stringify(products))