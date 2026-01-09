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