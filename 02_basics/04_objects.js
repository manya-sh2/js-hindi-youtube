const tinderUser = new Object();  //singleton
// const tinderUser = {};

console.log(tinderUser);
tinderUser.id = "123abc";
tinderUser.name = "sammy";
tinderUser.isLoggedIn = false;

const regularUser = {
    email : "some@gmail.com",
    fullname : {
        userfullname : {
            firstname : "manya",
            lastname : "sharma",
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1 : "a", 2 : "b"};
const obj2 = {3 : "c", 4 : "d"};

const obj3 = {obj1, obj2};
console.log(obj3);
const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4);

const obj5 = {...obj1, ...obj2};
console.log(obj5);

const users = [
    {
        id : 1,
        email : "m@gmail.com",
    },
    {
        id : 2,
        email : "a@gmail.com",
    }
]

console.log(users[1].email);
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
console.log(tinderUser.hasOwnProperty('isLogged'));


/*****************************destructuring of objects***************************/

const course = {
    courseName : "js in hindi", 
    price : "999",
    courseInstructor : "Hitesh",
}

const {courseInstructor : instructor} = course;
console.log(instructor);
