// const id = Symbol('123')
// const anotherId = Symbol('123')
// console.log(id === anotherId)
// const bigNumber = 123456787654321n

// const heroes = ["shaktiman", "naagraj", 'doga'];
// let myObj = {
//     name: "Manya",
//     age: 20,
// }

// const myFunction = function() {
//     console.log("Hello world");
// }

// ************************************ stack and heap ************************************ //

let myYTName = "Manyadotcom";
let anotherName = myYTName;
anotherName = "chaiaurcode";
console.log(myYTName);
console.log(anotherName);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl",
}
let userTwo = userOne;
userTwo.email = "manya@google.com";
console.log(userOne.email);
console.log(userTwo.email);