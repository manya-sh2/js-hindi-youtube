const user = {
    username : "manya",
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
    }
}

// user.welcomeMessage();
// user.username = "sam"
// user.welcomeMessage();

// console.log(this);   //{}

// function chai(){
    // let username = "manya"
    // console.log(this.username)  //undefined
// }

// const chai = function(){
//     let username = "manya"
//     console.log(this.username)  //undefined
// }

// const chai = () => {
//     let username = "manya"
//     console.log(this.username)  //undefined
// }
// chai();

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// const addTwo = (num1, num2) => num1 + num2;

const addTwo = (num1, num2) => ({username : "hitesh"});

console.log(addTwo(3, 4));
