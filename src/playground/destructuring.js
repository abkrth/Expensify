// Object Destucturing

// const person = {
//     name: 'Abhishek',
//     age: 20,
//     location: {
//         city: 'Guwahati',
//         temp: 92
//     }
// };

// const { name: firstName = 'Anonymous', age } = person;
// console.log(`${firstName} is ${age}.`);
// // const name = person.name;
// // const age = person.age;


//               this means put person.location.temp in temperature, and we don't have access to temp but we have to use temperature
// const { city, temp: temperature } = person.location;
// if (city && temperature)   {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         // name: 'Penguin'
//     }
// };

// const { name: publisherName = 'Self-Published' } = book.publisher;
// console.log(publisherName);




//
// Array Destructuring
//


// const address = ['1299 S Juniper Street', 'Guwahati', 'Assam' , '781035'];
// const [, city, state] = address;
// console.log(`You are in ${city} ${state}`);

const item = ['coffee (hot)', '10', '5', '2'];
const [dish, , medium_cost] = item;
console.log(`A medium ${dish} costs ${medium_cost}`);