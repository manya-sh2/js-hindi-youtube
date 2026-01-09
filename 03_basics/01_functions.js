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