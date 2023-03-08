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



localStorage.setItem('products', JSON.stringify(products))