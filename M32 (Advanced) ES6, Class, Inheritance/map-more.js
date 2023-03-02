const numbers = [12, 56, 23, 90, 87];
const half = numbers.map( n => n/2);
const three = numbers.map( n => n/3);

// console.log(half);
// console.log(three);


// Get the first letter from all names
const friends = ['Shahjalal Hazari', 'Emon Hazari', 'Robayet Islam', 'Robayed Hazari'];
const firstLetter = friends.map(friend => friend[0]);
console.log(firstLetter);

// Length of each name
const nameLength = friends.map(name => name.length);
console.log(nameLength);