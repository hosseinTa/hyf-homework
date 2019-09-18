const names = ['Peter', 'Ahmad', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala'];
const nameToRemove = 'Ahmad';

// Write some code here
//METHOD #1
//removing the item but living an undefined cell in the array.
//delete names[names.indexOf(nameToRemove)];

//METHOD #2
//removing an item from array completely without any leftover
// let firstHalf = names.slice(0 , names.indexOf(nameToRemove));
// let secondHalf = names.slice(names.indexOf(nameToRemove) + 1 , names.length);
// let names2 = firstHalf.concat(secondHalf);
// console.log(names2); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']
// Code done


//METHOD #3
names.splice(names.indexOf(nameToRemove), 1);
console.log(names); // ['Peter', 'Yana', 'kristina', 'Rasmus', 'Samuel', 'katrine', 'Tala']