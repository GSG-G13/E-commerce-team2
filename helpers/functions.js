function addToCart(array, product) {
  array.push(product);
  console.log(array);
  return array;
}

module.exports = { addToCart };
