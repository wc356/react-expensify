// Object destructuring

// const person = {
//   name: "Alex",
//   age: 30,
//   location: {
//     city: "New York City",
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

const address = ["1299 S Juniper Street", "New York City", "New York", "13325"];
const [, city, state = "New York"] = address;
console.log(`You are in ${city} ${state}.`);

const item = ["Coffee (hot)", "$2.00", "$2.50", "$2.75"];
const [drink, , price_m] = item;

console.log(`A medium ${drink} costs ${price_m}`);
