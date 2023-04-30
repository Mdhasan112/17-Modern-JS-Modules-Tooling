//Importing Module
// import { addToCart, totalPrice, totalQuantity } from './shoppingCart.js';
console.log('Importing Module');
// addToCart('Pizza', 5);
// console.log(totalPrice, totalQuantity);

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('lemon', 5);
// console.log(ShoppingCart.totalPrice);

import add from './shoppingCart.js';
add('bread', 20);

// console.log('start');

// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);

// console.log('end');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return { title: data.at(-1).title, body: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// //Not very clean
// lastPost.then(last => console.log(last));

const lastPost2 = await getLastPost();
console.log(lastPost2);
