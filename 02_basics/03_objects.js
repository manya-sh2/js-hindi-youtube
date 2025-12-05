//singleton
//object.create


//object literals

const mySym = Symbol("key1");
const JSuser = {
    name : "Manya",
    "full name" : "Manya Sharma",
    [mySym] : "myKey1",
    age : 20,
    location : "Udaipur",
    email : "manya@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Mon", "Sat"],
};

console.log(JSuser.email);
console.log(JSuser["email"]);
console.log(JSuser["full name"]);
console.log(JSuser[mySym]);

JSuser.email = "manya@chatgpt.com";
// Object.freeze(JSuser);
JSuser.email = "manya@microsoft.com";
console.log(JSuser);

JSuser.greeting = function(){
    console.log("Hello JS user");
}

console.log(JSuser.greeting); //[function(anonymous)]
console.log(JSuser.greeting());

JSuser.greeting2 = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JSuser.greeting2());

