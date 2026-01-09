function sayMyName(){
    console.log("M");
    console.log("A");
    console.log("N");
    console.log("Y");
    console.log("A");
}

sayMyName();

function addTwoNos(no1, no2){
    console.log(no1 + no2);
}

const result = addTwoNos(3, 4);
console.log("Result: ", result);

function add(no1, no2){
    return no1 + no2;
}
console.log("result: ", add(3, 4));

function logInUserMessage(username){
    return `${username} just logged in`;
}

function logInMessage(username){
    if(!username){
        return "Please enter a username";
    }
    return `${username} just logged in`;
}

console.log(logInUserMessage("Manya"));
console.log(logInUserMessage());
console.log(logInMessage());

function calculateCartPrice(...num1){
    return num1;
}

function cartPrice(val1, val2, ...num1){
    return num1;
}

console.log(calculateCartPrice(200, 400, 800, 2000));
console.log(cartPrice(200, 400, 800, 2000));

const user = {
    username : "hitesh", 
    price : 199
}

function handleObject(anyObject){
    return `username is ${anyObject.username} & price is ${anyObject.price}`;
}

console.log(handleObject(user));
console.log(handleObject({
    username : "sam",
    price : 399
}));

const myArr = [200, 400, 600, 800];
function returnSecondValue(getArr){
    return getArr[1];
}

console.log(returnSecondValue(myArr));
console.log(returnSecondValue([200, 400, 600, 800]));