let myDate = new Date();
console.log(myDate.toString()); //Thu Dec 04 2025 11:28:53 GMT+0000 (Coordinated Universal Time)
console.log(myDate.toISOString()); //2025-12-04T11:28:53.239Z
console.log(myDate.toJSON()); //2025-12-04T11:28:53.239Z
console.log(myDate.toLocaleDateString()); //12/4/2025
console.log(myDate.toLocaleString()); //12/4/2025, 11:28:53 AM
console.log(myDate.toLocaleTimeString()); //11:28:53 AM
console.log(myDate.toDateString()); //Thu Dec 04 2025

console.log(typeof myDate); //object

let Date1 = new Date(2023, 0, 23);
let Date2 = new Date(2023, 0, 23, 5, 3);
let Date3 = new Date("2023-01-14");
let Date4 = new Date("01-14-2023");

console.log(Date1.toLocaleString());
console.log(Date2.toLocaleString());
console.log(Date3.toLocaleString());
console.log(Date4.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
console.log(Date4.getTime()); // in milliseconds
console.log(Math.floor(Date.now() / 1000)); // in seconds

let newDate = new Date();
console.log(newDate); //2025-12-04T11:49:45.054Z
console.log(newDate.getMonth() + 1); //12
console.log(newDate.getDay()); //4

console.log(newDate.toLocaleString('default', {
    weekday : "short",
}));  // Thu

console.log(newDate.toLocaleString('default', {
    weekday : "long",
}));  // Thursday

