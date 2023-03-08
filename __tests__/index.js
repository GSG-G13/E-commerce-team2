const { addToCart } = require("../helpers/functions");

test("adding products in the cart", () => {
  const actual = addToCart([], { proName: "camera" });
  const expected = [{ proName: "camera" }];
  expect(actual).toStrictEqual(expected);
});
