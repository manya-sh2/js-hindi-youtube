const Arr1 = [0, 1, 2, 3, 4, 5];
const Arr2 = new Array(1, 2, 3, 4);
console.log(Arr1[0]);

//Array methods

Arr1.push(6);
Arr1.push(7);
console.log(Arr1);
Arr1.pop();
console.log(Arr1);
Arr1.unshift(9);
console.log(Arr1);
Arr1.shift();
console.log(Arr1);
console.log(Arr1.includes(9));
console.log(Arr1.indexOf(3));
const newArr = Arr1.join();
console.log(Arr1);
console.log(newArr);

//slice , splice

console.log("A", Arr1);
const myn1 = Arr1.slice(1, 3);
console.log(myn1);
console.log("B", Arr1);
const myn2 = Arr1.splice(1, 3);
console.log(myn2);
console.log("C", Arr1);



