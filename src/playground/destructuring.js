// Object destructuring

// const person = {
//   name: "Woo",
//   age: 23,
//   location: {
//     city: "Cliffside Park",
//     temp: 43
//   }
// };

// const { name: firstName = "Anonymous", age } = person;
// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//   console.log(`It's ${temperature} in ${city}.`);
// }

// const book = {
//   title: "Ego is the Enemy",
//   author: "Ryan Holiday",
//   publisher: {
//     name: "Penguin"
//   }
// };

// const { name: publisherName = "Self-Published" } = book.publisher;

// console.log(publisherName);

// Array destructuring

const address = [
  "1299 S Juniper Street",
  "Cliffside Park",
  "New Jersey",
  "13325"
];
const [, city, state = "New York"] = address;
console.log(`You are in ${city} ${state}.`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];
const [drink, , price_m] = item;

console.log(`A medium ${drink} costs ${price_m}`);
