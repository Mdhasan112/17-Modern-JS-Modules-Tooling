//Exporting Module
console.log('Exporting Module');

const cart = [];
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} add to cart.`);
};

const totalPrice = 250;
const totalQuantity = 15;

export { totalPrice, totalQuantity };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} add to cart.`);
}
