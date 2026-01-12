// var c = 300
// if(true){
//     let a = 10;
//     const b = 20;
//     var c = 30;
// }
// console.log(a);    error
// console.log(b);    error
// console.log(c);    30


let a = 200;
if(true){
    let a = 10;
    let b = 20;
    console.log("INNER: ", a);
}
console.log(a);

function one(){
    const username = "hitesh";
    function two(){
        const website = "youtube";
        console.log(username);   // hitesh
    }
    // console.log(website);  //error
    two();
}
one();  //hitesh
if(true){
    const username = "hitesh"
    if(true){
        const website = "youtube";
        console.log(username + website);
    }
}
// console.log(username)   //error

addOne(4)  //5
function addOne(num){
    return num + 1;
}

// addTwo(5)  //error
const addTwo = function(num){
    return num + 2;
}
addTwo(5)