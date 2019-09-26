console.log("hi Shreyansh");

// Array Methods 		
let fruits=['Apple','Banana','Guava'];
console.log(fruits);

fruits.pop();
console.log(fruits);

fruits.shift();
console.log(fruits);


fruits.push('Cherry')
console.log(fruits);

fruits.unshift("Lemon");
console.log(fruits);

delete fruits[1];
console.log(fruits);


fruits[1]='orange';
console.log(fruits);


fruits.splice(2);
console.log(fruits);


let citrusFruits=fruits.slice(0,1);

console.log("Original Array is :: "+ fruits);

console.log(citrusFruits);