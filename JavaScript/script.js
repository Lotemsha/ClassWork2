'use strict'

let product = {
  id: 406745190,
  name: "Lotem",
  description: "A human been",
  price: 5000,
  manufeturer: "Galia and Koby"
}
console.log(product);
product.category = "Human";
product.price = 10000;
delete product.description;
console.log(product);

console.log(typeof product.price)

let txt = "Hello";
let number = 123;
let str = "true";
let flag = true;

console.log(typeof txt);
console.log(typeof number);
console.log(typeof str);
console.log(typeof flag);

let num = 100;
num += 100;
console.log(num); //200

const arr = [1, 2, 3];
arr[0] = 5;
console.table(arr);